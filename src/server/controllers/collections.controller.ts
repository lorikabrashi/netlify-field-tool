import { HelperService } from '../services/helper.service'
import { FileSystemService } from '../services/fileSystem.service'
import { ICreateCollectionData, IDeleteCollectionData, INetlifyCmsCollection, ISingleCollectionData } from '../../shared/types'

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

  getSingleCollection(data: ISingleCollectionData) {
    const { slug, collection } = data
    return this.fileSystemService.getCollection(slug, collection)
  }

  deleteCollection(data: IDeleteCollectionData) {
    const { name, slug } = data
    this.fileSystemService.deleteCollection(name, slug)
    return true
  }
  
  createCollection(data: ICreateCollectionData) {
    const { slug, name, label } = data
    const collectionData: INetlifyCmsCollection = {
      name: name,
      label: label,
    }
    this.fileSystemService.writeJsonCollection(collectionData, slug, name)
    return true
  }
}

const collectionController = new CollectionController()
export default collectionController
