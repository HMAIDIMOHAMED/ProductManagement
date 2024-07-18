import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductServiceService } from 'src/app/service/product-service.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  product: any = {
    name: '',
    n_inventaire: '',
    affection: '',
    date_achat: '',
    ref_bc_march:''
  };

  constructor(private productService: ProductServiceService, private router: Router) {}

  ngOnInit(): void {}

  addProduct(): void {
    console.log(this.product);
    this.productService.addProduct(this.product).subscribe(
      data => {
        alert("Product added successfully!");
        this.goToProductListPage(); 
      },
      error => {
        alert("Failed to add product.");
      }
    );
  }

  goToProductListPage(): void {
    this.router.navigate(['/products']); 
  }
}
