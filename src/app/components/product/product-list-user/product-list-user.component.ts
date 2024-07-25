import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from 'src/app/service/product-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list-user',
  templateUrl: './product-list-user.component.html',
  styleUrls: ['./product-list-user.component.css']
})
export class ProductListUserComponent implements OnInit {
  products: any[] = []; 

  constructor(private productService: ProductServiceService, private router: Router) {}

  ngOnInit(): void {
    this.displayAllProducts();
  }

  displayAllProducts(): void {
    this.productService.displayAllProducts().subscribe((data: any[]) => {
      this.products = data; 
    });
  }
}
