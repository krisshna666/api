import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable,throwError} from 'rxjs';
import {IProduct} from './Elproduct.interface';
import {HttpClientModule} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _httpClient:HttpClient) { }
getProducts()
{
  const url1="https://jsonplaceholder.typicode.com/photos";
 
  return this._httpClient.get(url1);
 
}
getProducts2(){
  const url2="https://jsonplaceholder.typicode.com/users";
  return this._httpClient.get(url2);
}

}
