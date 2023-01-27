import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ViewAllProductComponent } from './view-all-product/view-all-product.component';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {

  search=new BehaviorSubject("")
  constructor(private http:HttpClient) {
   }
//http request view all products

viewAllProducts(){
  return this.http.get('http://localhost:3000/products')
}
addproduct(newproduct:any){
  return this.http.post("http://localhost:3000/products",newproduct)
}
// to get single product data//

viewProduct(id:any){
  return this.http.get("http://localhost:3000/products/"+id)

   

}

addProduct(newproduct:any){
  return this.http.post("http://localhost:3000/products",newproduct)

}

DeleteProduct(id:any){
  return this.http.delete("http://localhost:3000/products/"+id)
  
}
//edit product
updateProduct(id:any,data:any) {
  return this.http.put("http://localhost:3000/products/"+id,data)
}

}






