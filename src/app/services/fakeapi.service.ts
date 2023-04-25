import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FakeapiService {

  url="https://fakestoreapi.com/products";
  value:boolean=false;

  currentUserCart=JSON.parse(localStorage.getItem("userCart") || "[]")
  userId=JSON.parse(localStorage.getItem("loginedUser")||"0")

  cartItem:number=0
  constructor(public http: HttpClient) { 
    this.count() 
  }
  count() {
    this.cartItem=0
    this.currentUserCart.filter((data:any)=>{
      if(data.user==this.userId)
      this.cartItem++;
    })
  }
  

  fakeProductsList(){
   return this.http.get(this.url)
  }

  fakeItemDetails(productID:number){
    return this.http.get('https://fakestoreapi.com/products/'+productID)
  }
}
