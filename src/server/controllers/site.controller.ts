import { ISiteData } from '../../shared/types'
import { HelperService } from '../services/helper.service'
import { SiteService } from '../services/site.service'

export class SiteController {
  helperService: HelperService
  private siteService: SiteService

  constructor() {
    this.siteService = new SiteService()
    this.helperService = new HelperService()
  }

  createSite(siteData: ISiteData) {
    
    // Logic
    /*
      1. get config yml from site (site data path)
      2. create a folder for this site using slug on DATA folder
      3. read config yml and create a replica as config.json in website folder in DATA  
    */

  }
  deleteSite () {
    //
  }
}

const siteController = new SiteController()
export default siteController
