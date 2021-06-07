import { IOClients } from '@vtex/api'

import SkuClient from './skuClient'

export class Clients extends IOClients {
  public get sku() {
    return this.getOrSet('skuclient', SkuClient)
  }
}
