import { Injectable } from '@angular/core';
import { ErrorHandlerService } from './error-handler.service';

import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl: string;
  constructor(
    private errorHandler: ErrorHandlerService,
    private http: HttpClient,
    private baseSevice: BaseService
  ) {
    this.baseUrl = this.baseSevice.baseUrl;
  }

  // get all customers
  getInfo(data) {
    let query = '';
    if (data) {
      const esc = encodeURIComponent;
      query = Object.keys(data)
        .map(k => esc(k) + '=' + esc(data[k]))
        .join('&');
    }
    query = query != '' ? '/?' + query : '';
    console.log(query);
    return this.http.get(this.baseUrl + 'getInfo' + query).pipe(
      //retry(1),
      catchError(this.errorHandler.handleError)
    );
  }

}
