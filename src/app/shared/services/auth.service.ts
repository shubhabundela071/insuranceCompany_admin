import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { retry, catchError, timeout } from "rxjs/operators";
import { ErrorHandlerService } from "./error-handler.service";
import { BaseService } from "./base.service";
import { Observable } from 'rxjs/Observable';
import { JwtHelperService } from "@auth0/angular-jwt";
import { throwError } from "rxjs";
import { Router } from '@angular/router';
import { data } from "jquery";
@Injectable({
  providedIn: "root"
})
export class AuthService {
    // updateFCMtoken(arg0: { "userId": any; "FCMtoken": any; }) {
    //     throw new Error("Method not implemented.");
    // }
  baseUrl: string;

  constructor(
    private http: HttpClient,
    private bs: BaseService,
    private errorHandler: ErrorHandlerService,
    private jwtHelperService: JwtHelperService,
    private router: Router
  ) {
    this.baseUrl = this.bs.baseUrl;
  }
  updateFCMtoken(userId, device_token) {
    var localDate = new Date();
    var LocalDate = localDate.getTimezoneOffset();
    console.log("Local Time Zone---", LocalDate)
    console.log("data auth updateFCMtoken" , device_token)
    let data = {userId, device_token, LocalDate}

    return this.http.post(this.baseUrl + 'updateFCMtoken', data)
      .pipe(catchError(this.errorHandler.handleError));
  }

  
  isAuthenticated() {
    const token = localStorage.getItem('token');
    if (!token) {

      // this.logout();
      return false;

    } else {
      // check token validity - is token expired
      if (this.jwtHelperService.isTokenExpired(token)) {
        return false;
      } else {
        return true;
      }
    }
  }

  login(data) {
   // console.log("Login Service")
    return this.http
      .post(this.baseUrl + 'admin/login', data, { observe: 'response' })
      .pipe(
        retry(3),
        catchError(this.errorHandler.handleError)
      );
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigateByUrl('/auth/login');
  }

  recoverPassword(data) {
    return this.http.post(this.baseUrl + 'admin/forgotPassword', data).pipe(
      retry(3),
      catchError(this.errorHandler.handleError)
    );
  }

  resetPassword(data, verificationLink) {
   // console.log('resetPassword services' + JSON.stringify(data))
   // console.log(data, verificationLink);
    return this.http
      .post(this.baseUrl + 'admin/verify/' + verificationLink, data)
      .pipe(
        retry(3),
        catchError(this.errorHandler.handleError)
      );
  }



  updateServerDeviceToken(data) {
    return this.http.post(this.baseUrl + 'updateDeviceToken', data)
      .pipe(
        retry(3),
        catchError(this.errorHandler.handleError)
    );
  }

  activateUserCheck(data, param) {
    return this.http.post(this.baseUrl  + 'activateUser/' + param, data)
    .pipe(
      retry(3),
      catchError(this.errorHandler.handleError)
  );
}
}
