import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../product';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
 
  private baseURL = "http://localhost:8080/products";

  constructor(private httpClient: HttpClient) { }

  addProduct(product: Product): Observable<Product> {
    return this.httpClient.post<Product>(this.baseURL, product);
  }

  displayAllProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.baseURL);
  }

  getProductByName(name: string): Observable<Product> {
    return this.httpClient.get<Product>(`${this.baseURL}/${name}`);
  }

  updateProduct(product: Product): Observable<Product> {
    return this.httpClient.put<Product>(`${this.baseURL}/${product.name}`, product);
}

}

