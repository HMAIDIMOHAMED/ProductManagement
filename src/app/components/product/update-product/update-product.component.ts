import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductServiceService } from 'src/app/service/product-service.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent {


  
  products: any = {
    name: '',
    description: '',
    price: '',
    quantity: ''
  };
  constructor( private activeRouter: ActivatedRoute, private productService: ProductServiceService, private router: Router){}
  name !: string;

  ngOnInit() : void {

    this.name=this.activeRouter.snapshot.params['name'];
    console.log(this.name);
    this.productService.getProductByName(this.name).subscribe(data=>{
      this.products=data;
      console.log(this.products);
    })

  }

  updateProduct(){
    this.productService.updateProduct(this.products).subscribe(data=>{
      alert("Updated Successfully")
      this.router.navigate(['/products'])
    },error=>alert("Sorry"))
  }
}
