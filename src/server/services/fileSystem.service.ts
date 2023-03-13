import readYamlFile from 'read-yaml-file'
import * as fs from 'fs'
import path from 'path'
import { INetlifyCmsCollection, INetlifyCmsConfig, INetlifyOptions } from '../../shared/types'

export class FileSystemService {
  private DATA_PATH: string
  private ENCODING: BufferEncoding

  constructor() {
    this.DATA_PATH = path.resolve(`${__dirname}/../../../data/`)
    this.ENCODING = 'utf8'
  }

  async readNetlifyCmsConfigFile(path: string) {
    if (!path.includes('config.yml')) {
      path = `${path}/config.yml`
    }
    return await readYamlFile<INetlifyCmsConfig>(path)
  }

  getOptions(slug: string) {
    const data = fs.readFileSync(`${this.DATA_PATH}/${slug}/options.json`, this.ENCODING)
    return JSON.parse(data) as INetlifyOptions
  }

  getCollection(slug: string, collection: string) {
    const path = `${this.DATA_PATH}/${slug}/collections/${collection}.json`
    const data = fs.readFileSync(path, this.ENCODING)
    return JSON.parse(data)
  }

  getCollections(slug: string) {
    const dir = fs.readdirSync(`${this.DATA_PATH}/${slug}/collections`)
    const collections: INetlifyCmsCollection[] = []
    for (let i = 0; i < dir.length; i++) {
      const data = fs.readFileSync(`${this.DATA_PATH}/${slug}/collections/${dir[i]}`, this.ENCODING)
      collections.push(JSON.parse(data) as INetlifyCmsCollection)
    }
    return collections
  }

  writeJsonOptions(data: INetlifyOptions, slug: string) {
    fs.writeFileSync(`${this.DATA_PATH}/${slug}/options.json`, JSON.stringify(data, null, 2))
  }

  writeJsonCollection(data: INetlifyCmsCollection, slug: string, collectionName: string) {
    fs.writeFileSync(`${this.DATA_PATH}/${slug}/collections/${collectionName}.json`, JSON.stringify(data, null, 2))
  }

  createDataStructureForSite(slug: string) {
    const path = `${this.DATA_PATH}/${slug}/collections`
    if (!fs.existsSync(path)) {
      fs.mkdirSync(path, { recursive: true })
    }
  }

  deleteDataStructureForSite(path: string, fullPath = true) {
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

  deleteCollection(name: string, slug: string) {
    const path = `${this.DATA_PATH}/${slug}/collections/${name}.json`
    fs.unlinkSync(path)
  }
}

const fileSystem = new FileSystemService()
export default fileSystem
