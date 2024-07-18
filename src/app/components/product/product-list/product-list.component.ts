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

  updateProduct(name:string){

    console.log(name);
    this.router.navigate(['updateproduct',name]);


  }

  deleteProduct(name: string): void {
    if (confirm(`Are you sure you want to delete product "${name}"?`)) {
      this.productService.deleteProduct(name).subscribe(
        () => {
          alert(`Product "${name}" deleted successfully!`);
          this.displayAllProducts(); 
        },
        error => {
          alert(`Failed to delete product "${name}".`);
          console.error('Error deleting product:', error);
        }
      );
    }
  }


}
