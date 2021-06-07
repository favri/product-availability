import fetch from 'node-fetch'
import type { InstanceOptions, IOContext } from '@vtex/api'
import { ExternalClient } from '@vtex/api'

const SANDBOX_URL =
  'https://arvital.vtexcommercestable.com.br/api/logistics/pvt/inventory/skus'

export default class SkuClient extends ExternalClient {
  constructor(protected context: IOContext, options?: InstanceOptions) {
    super(SANDBOX_URL, context, {
      ...options,
      headers: {
        ...(options?.headers ?? {}),
        'X-Vtex-Use-Https': 'true',
      },
    })
  }

  public async getById(account: string, skuId: string) {
    const response = await fetch(
      `https://${account}.vtexcommercestable.com.br/api/logistics/pvt/inventory/skus/${skuId}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'X-VTEX-API-AppKey': 'vtexappkey-kaluapoc-KLZZGL',
          'X-VTEX-API-AppToken':
            'NBBHBVTYPGXPKIUIJCAFJXBHWCMEQLHDJCUPXZDUYUIPOMSJNRBIGIVPZTKZJPHEZUFIOFKJYGGPPMTKKDQZKZXBGEPEOEKIMEPTGJUIGRJZBGANZAPFZITAXECJPGVU',
        },
      }
    )

    return response.json()
  }
}
