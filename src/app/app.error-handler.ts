import { HttpErrorResponse } from '@angular/common/http'
import { ErrorHandler, Injectable, Injector, NgZone } from '@angular/core'
import { Observable } from 'rxjs'

import { NotificationService } from './core/services/notification.service'
import { LoginService } from './core/services/login.service'

@Injectable()
export class ApplicationErrorHandler extends ErrorHandler {
  constructor(
    private ns: NotificationService,
    private injector: Injector,
    private zone: NgZone,
  ) {
    super()
  }
  override handleError(errorResponse: HttpErrorResponse | any): void {
    if (errorResponse instanceof HttpErrorResponse) {
      const message = errorResponse.error.message
      this.zone.run(() => {
        switch (errorResponse.status) {
          case 401:
            break
          case 403:
            this.ns.notify(message || 'Não autorizado.')
            break
          case 404:
            this.ns.notify(
              message ||
                'Recurso não encontrado. Verifique o console para mais detalhes',
            )
            break
        }
      })
    }
    /*let errorMessage: string
        if (error instanceof HttpErrorResponse) {
            const body = error.error
            errorMessage = `Erro ${error.status} ao acessar a URL ${error.url} -${error.statusText} ${body}`
        } else {
            errorMessage = error.toString()
        }*/
    super.handleError(errorResponse)
    // console.log(errorMessage)
    // return Observable.throw(errorMessage)
  }
}
