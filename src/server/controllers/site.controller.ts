import { ISiteData } from '../../shared/types'
import { HelperService } from '../services/helper.service'
import { FileSystemService } from '../services/fileSystem.service'

export class SiteController {
  helperService: HelperService
  private fileSystemService: FileSystemService

  constructor() {
    this.fileSystemService = new FileSystemService()
    this.helperService = new HelperService()
  }

  async createSite(siteData: ISiteData) {
    this.fileSystemService.createDataStructureForSite(siteData.slug)
    const netlifyCmsConfigData = await this.fileSystemService.readNetlifyCmsConfigFile(siteData.path)

    const { collections, ...options } = netlifyCmsConfigData

    collections.forEach((elem) => {
      this.fileSystemService.writeJsonCollection(elem, siteData.slug, elem.name)
    })
    this.fileSystemService.writeJsonOptions(options, siteData.slug)

    return true
  }

  deleteSite(slug: string) {
    this.fileSystemService.deleteDataStructureForSite(slug, false)
    return true
  }

  getOptions(slug: string) {
    return this.fileSystemService.getOptions(slug)
  }
}

const siteController = new SiteController()
export default siteController
