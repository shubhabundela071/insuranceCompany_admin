import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
 // baseUrl = 'https://live.com/api/';     //- live server
  baseUrl = 'http://localhost:3000/api/';

  constructor() {}
}
