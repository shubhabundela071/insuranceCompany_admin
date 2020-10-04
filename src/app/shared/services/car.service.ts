import { Injectable } from '@angular/core';
import { ErrorHandlerService } from './error-handler.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BaseService } from './base.service';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  baseUrl: string;
  constructor(
    private errorHandler: ErrorHandlerService,
    private http: HttpClient,
    private baseSevice: BaseService
  ) {
    this.baseUrl = this.baseSevice.baseUrl;
  }

  // get all Car
  isCarRegistered(data) {
    if (data) {
    //  console.log(data)
        let PARAMS = new HttpParams();
        PARAMS= PARAMS.append("search", data.search);
        PARAMS= PARAMS.append("page", data.page);
        PARAMS= PARAMS.append("limit", data.limit);
        return this.http.get(this.baseUrl + "isCarRegistered", {
        params: PARAMS
        })
        .pipe(catchError(this.errorHandler.handleError));
    }
  }
}
