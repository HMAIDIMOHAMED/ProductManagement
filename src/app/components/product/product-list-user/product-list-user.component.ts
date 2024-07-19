import { Component } from '@angular/core';
import { ProductServiceService } from 'src/app/service/product-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list-user',
  templateUrl: './product-list-user.component.html',
  styleUrls: ['./product-list-user.component.css']
})
export class ProductListUserComponent {
  constructor(private productService: ProductServiceService,private router: Router){}

  products: any = {
    name: '',
    n_inventaire: '',
    affection: '',
    date_achat: '',
    ref_bc_march: ''

  };

ngOnInit(): void{
  this.displayAllProducts();
}


  displayAllProducts(){
    this.productService.displayAllProducts().subscribe(data=>{
      this.products=data;
    })
   
  }
}
