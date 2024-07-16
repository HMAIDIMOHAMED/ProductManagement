import { Component } from '@angular/core';
import { ProductServiceService } from 'src/app/service/product-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  constructor(private productService: ProductServiceService,private router: Router){}

  products: any = {
    name: '',
    description: '',
    price: '',
    quantity: ''
  };

ngOnInit(): void{
  this.displayAllProducts();
}


  displayAllProducts(){
    this.productService.displayAllProducts().subscribe(data=>{
      this.products=data;
    })
   
  }

  updateProduct(name:string){

    console.log(name);
    this.router.navigate(['updateproduct',name]);


  }


}
