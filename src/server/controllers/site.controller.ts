import { HelperService } from '../services/helper.service'
import { SiteService } from '../services/site.service'

export class SiteController {
  helperService: HelperService
  private siteService: SiteService

  constructor() {
    this.siteService = new SiteService()
    this.helperService = new HelperService()
  }

  
}

const siteController = new SiteController()
export default siteController
