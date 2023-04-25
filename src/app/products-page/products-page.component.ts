import { AfterViewInit, Component ,DoCheck,OnInit } from '@angular/core';
import { FakeapiService } from '../services/fakeapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent implements OnInit {

  productsData:any;
  userId: any;
  currentUserCart: any;

  constructor( private _apiService:FakeapiService ,private route:Router){
  }
  
  ngOnInit(): void {      
    console.log(this._apiService.value,"pp");
  this.productsData=this._apiService.fakeProductsList()
  console.log(this.productsData)
  }
  productDetails(productId:number){
    console.log(productId);
    this.route.navigate(['/itemDetail'],{queryParams:{id:productId}})
  }
}
