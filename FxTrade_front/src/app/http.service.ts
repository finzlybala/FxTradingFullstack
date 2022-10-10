import { Injectable } from '@angular/core';
import{HttpClient}from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  url:string="http://localhost:8080/"

  constructor(private http:HttpClient) {
  }
  book(obj:any){
   return this.http.post(`${this.url}booktrade/book`,obj,{responseType:'text'});
  }
  print(): Observable<any>  {
    return this.http.get(`${this.url }printtrade`);
  }
}
