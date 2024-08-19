import { Injectable } from '@angular/core';
import { Payment } from '../payment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private baseUrl = 'http://localhost:8080/payment/add';
  private baseUrl1 = 'http://localhost:8080/payment';

  constructor(private httpClient: HttpClient) { }

  postMessage(payment: Payment): Observable<Payment> {
    return this.httpClient.post<Payment>(this.baseUrl, payment);
  }

  getAllMessages(): Observable<Payment[]> {
    return this.httpClient.get<Payment[]>(this.baseUrl1);
  }
}
