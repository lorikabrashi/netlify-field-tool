import readYamlFile from 'read-yaml-file'
import * as fs from 'fs'
import path from 'path'
import { INetlifyCollection, INetlifyConfig, INetlifyOptions } from '../../shared/types'
import { CollectionTypes } from '../../shared/constants'

export class FileSystemService {
  private DATA_PATH: string
  private ENCODING: BufferEncoding

  constructor() {
    this.DATA_PATH = path.resolve(`${__dirname}/../../../data/`)
    this.ENCODING = 'utf8'
  }

  async readNetlifyConfigFile(path: string): Promise<INetlifyConfig> {
    if (!path.includes('config.yml')) {
      path = `${path}/config.yml`
    }
    return await readYamlFile<INetlifyConfig>(path)
  }

  getOptions(slug: string): INetlifyOptions {
    const data = fs.readFileSync(`${this.DATA_PATH}/${slug}/options.json`, this.ENCODING)
    return JSON.parse(data) as INetlifyOptions
  }

  getCollection(slug: string, collection: string): INetlifyCollection {
    const path = `${this.DATA_PATH}/${slug}/collections/${collection}.json`
    const data = fs.readFileSync(path, this.ENCODING)
    return JSON.parse(data) as INetlifyCollection
  }

  getCollections(slug: string): INetlifyCollection[] {
    const dir = fs.readdirSync(`${this.DATA_PATH}/${slug}/collections`)
    const collections: INetlifyCollection[] = []
    for (let i = 0; i < dir.length; i++) {
      const data = fs.readFileSync(`${this.DATA_PATH}/${slug}/collections/${dir[i]}`, this.ENCODING)
      collections.push(JSON.parse(data) as INetlifyCollection)
    }
    return collections
  }

  writeJsonOptions(data: INetlifyOptions, slug: string): void {
    fs.writeFileSync(`${this.DATA_PATH}/${slug}/options.json`, JSON.stringify(data, null, 2))
  }

  writeJsonCollection(data: INetlifyCollection, slug: string, collectionName: string): void {
    fs.writeFileSync(`${this.DATA_PATH}/${slug}/collections/${collectionName}.json`, JSON.stringify(data, null, 2))
  }

  createDataStructureForSite(slug: string): void {
    const path = `${this.DATA_PATH}/${slug}/collections`
    if (!fs.existsSync(path)) {
      fs.mkdirSync(path, { recursive: true })
    }
  }

  deleteDataStructureForSite(path: string, fullPath = true): void {
    if (!fullPath) {
      path = `${this.DATA_PATH}/${path}`
    }

    if (fs.existsSync(path)) {
      fs.readdirSync(path).forEach((file) => {
        let curPath = path + '/' + file
        if (fs.lstatSync(curPath).isDirectory()) {
          this.deleteDataStructureForSite(curPath)
        } else {
          fs.unlinkSync(curPath)
        }
      })
      fs.rmdirSync(path)
    }
  }

  deleteCollection(name: string, slug: string): void {
    const path = `${this.DATA_PATH}/${slug}/collections/${name}.json`
    fs.unlinkSync(path)
  }

  setCollectionType(slug: string, collection: string, type: CollectionTypes): void {
    const collectionData = this.getCollection(slug, collection)
    if (type !== CollectionTypes.NONE && !collectionData[type.toLocaleLowerCase() as keyof INetlifyCollection]) {
      const data = (({ files, fields, ...o }) => o)(collectionData)
      const newCollectionData: INetlifyCollection = { ...data, [type.toLocaleLowerCase()]: [] }
      this.writeJsonCollection(newCollectionData, slug, collection)
    }
  }
}

const fileSystem = new FileSystemService()
export default fileSystem
