import { HelperService } from '../services/helper.service'
import { FileSystemService } from '../services/fileSystem.service'

export class CollectionController {
  helperService: HelperService
  private fileSystemService: FileSystemService

  constructor() {
    this.fileSystemService = new FileSystemService()
    this.helperService = new HelperService()
  }

  getCollections(slug: string) {
    return this.fileSystemService.getCollections(slug)
  }

  deleteCollection(name: string, slug: string) {
    this.fileSystemService.deleteCollection(name, slug)
    return true
  }
}

const collectionController = new CollectionController()
export default collectionController
