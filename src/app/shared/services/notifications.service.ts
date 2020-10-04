import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
import { ErrorHandlerService } from './error-handler.service';
import { UtilityService } from 'app/shared/utility/utility.service';
import { timeout, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  base_url:string;
  constructor(private http:HttpClient,
    private baseSevice: BaseService,
    private errorHandler: ErrorHandlerService,
    private utility: UtilityService)
  {
  this.base_url = this.baseSevice.baseUrl;
  }

  getPage(callfunction, params){
    if (callfunction == 'notification') {
      return this.fetchNotifications()
    }
  }

  fetchNotifications() {
    return this.http.get(this.base_url + 'admin/getAllNotification?limit=10&page=1').pipe(
      timeout(10000),
      catchError(this.errorHandler.handleError)
    )
  }

  fetchAllNotifications() {
    return this.http.get(this.base_url + 'admin/getAllNotification?limit=9000000&page=1').pipe(
      timeout(10000),
      catchError(this.errorHandler.handleError)
    )
  }

  updateNotification() {
    return this.http.get(this.base_url + 'admin/notificationCount').pipe(
      timeout(10000),
      catchError(this.errorHandler.handleError)
    )
  }
}
