import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Product } from '../entity/product';
@Injectable()
export class ProductdataService {

    url:string="https://rkdemotask.herokuapp.com/prods/";
  constructor(private _http:HttpClient) { }

  getAllProduct(){

      return this._http.get<Product[]>(this.url);
  }
  addProduct(item:Product){

    let body=JSON.stringify(item);
    return this._http.post(this.url,body,
      {headers:new HttpHeaders().set('Content-Type','application/json')}
    );
 }
deleteProduct(id:number){
  return this._http.delete(this.url+id,
    {headers:new HttpHeaders().set('Content-Type','application/json')}
  );
}
}
