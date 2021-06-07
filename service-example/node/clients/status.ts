import type { InstanceOptions, IOContext, IOResponse } from '@vtex/api'
import { ExternalClient } from '@vtex/api'

export default class Status extends ExternalClient {
  constructor(context: IOContext, options?: InstanceOptions) {
    super('http://arvital.vtexcommercestable.com.br/api/logistics/pvt/inventory/skus/', context,
    {
      ...options,
      headers: {
        'VtexIdclientAutCookie': 'eyJhbGciOiJFUzI1NiIsImtpZCI6IjZFOEY2MjI3NEZBQTk2QkM2MzA4QTgwMzBCMDE3NTI1QTRCN0U2ODMiLCJ0eXAiOiJqd3QifQ.eyJzdWIiOiJ0b21hcy5tZWhkaUB2dGV4LmNvbS5iciIsImFjY291bnQiOiJhcnZpdGFsIiwiYXVkaWVuY2UiOiJhZG1pbiIsInNlc3MiOiIxNGUyZjIyYi01ODNiLTQ0NzgtOTgyMC1kNmU1NzBjODJiMGEiLCJleHAiOjE2MjMxNjQxNDEsInVzZXJJZCI6ImVjYzZiNzZkLTUxNjQtNDYxZC05YzRlLWMxMzQ0MmUwMjJhMiIsImlhdCI6MTYyMzA3Nzc0MSwiaXNzIjoidG9rZW4tZW1pdHRlciIsImp0aSI6ImQzOWJmMmFmLTU0ZTgtNGE5OC05ZjI4LTA2YTE1ODYwMWM3OSJ9.xtTQXimesnSl0zRojEu8A5jIp4yRzdS9ZpJyBjMSKHnGKLGmqULR43j7ILB-vPCiXyq97FFHMMHjn_H2rga2Kg',
      },
    })
  }

  public async getStatus(status: number): Promise<string> {
    return this.http.get(status.toString() + '?an=arvitalav', {
      metric: 'status-get',
    })
  }

  public async getStatusWithHeaders(
    status: number
  ): Promise<IOResponse<string>> {
    return this.http.getRaw(status.toString(), {
      metric: 'status-get-raw',
    })
  }
}
