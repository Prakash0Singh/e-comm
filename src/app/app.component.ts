import { Component,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { FakeapiService } from './services/fakeapi.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  
  constructor(public router:Router, public _fakeProduct:FakeapiService){}

  ngOnInit(){
    this._fakeProduct.value = JSON.parse(localStorage.getItem("toggleButton") || "false")
    //  this.currentUserCart.filter((data:any)=>{
    //   if (data.id=this.userId) {
    //     this.cartItem++;
    //   }
    // })
    // console.log(this.cartItem);
  }
  
  homepage(){
    if (this._fakeProduct.value) {
    this.router.navigate(['/products-page'])
    }
    else{
    this.router.navigate([''])
    }
  }
  registerUser(){
    this.router.navigate(['/registeration-page'])
  }
  loginUser(){
    this.router.navigate(['/login-page'])
  }
  userLogout(){
    this._fakeProduct.value = false
    localStorage.removeItem("loginedUser");
    localStorage.removeItem("toggleButton")

    this.router.navigate([''])
  }
  cartpage(){
    this.router.navigate(['/cart-page'])
  }
}
