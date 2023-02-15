import readYamlFile from 'read-yaml-file'
import * as fs from 'fs'
import path from 'path'
import { INetlifyCmsCollection, INetlifyCmsConfig } from '../../shared/types'

export class FileSystemService {
  private DATA_PATH: string

  constructor() {
    this.DATA_PATH = path.resolve(`${__dirname}/../../../data/`)
  }

  async readNetlifyCmsConfigFile(path: string) {
    if (!path.includes('config.yml')) {
      path = `${path}/config.yml`
    }

    const data = await readYamlFile<INetlifyCmsConfig>(path)
    return data
  }

  async writeJsonOptions(data: Omit<INetlifyCmsConfig, 'collections'>, slug: string) {
    fs.writeFileSync(`${this.DATA_PATH}/${slug}/options.json`, JSON.stringify(data, null, 2))
  }

  async writeJsonCollection(data: INetlifyCmsCollection, slug: string, collectionName: string) {
    fs.writeFileSync(`${this.DATA_PATH}/${slug}/collections/${collectionName}.json`, JSON.stringify(data, null, 2))
  }

  createDataStructureForSite(slug: string) {
    const path = `${this.DATA_PATH}/${slug}/collections`
    if (!fs.existsSync(path)) {
      fs.mkdirSync(path, { recursive: true })
    }
  }

  deleteDataStructureForSite(slug: string) {
    const path = `${this.DATA_PATH}/${slug}`

    if (fs.existsSync(path)) {
      fs.readdirSync(path).forEach((file) => {
        var curPath = path + '/' + file
        if (fs.lstatSync(curPath).isDirectory()) {
          this.deleteDataStructureForSite(curPath)
        } else {
          fs.unlinkSync(curPath)
        }
      })
      fs.rmdirSync(path)
    }
  }
}

const fileSystem = new FileSystemService()

export default fileSystem
