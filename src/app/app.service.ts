import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http:HttpClient) { }
    getProducts(){
      return this.http.get<any>("https://fakestoreapi.com/products")
      .pipe(map((res:any)=>{
        return res
      }))

    }
   }

