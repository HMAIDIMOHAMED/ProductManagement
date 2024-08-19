import { Component } from '@angular/core';
import { PaymentService } from 'src/app/service/payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {

  constructor(private paymentService: PaymentService){
  }
  cardNumber: string = '';
  cardHolder: string = '';
  expMonth: string = '';
  expYear: string = '';
  cvv: string = '';
  months: string[] = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
  years: string[] = ['2021', '2022', '2023', '2024', '2025', '2026', '2027', '2028', '2029', '2030'];

  flipCard(showBack: boolean) {
    const front = document.querySelector('.front') as HTMLElement;
    const back = document.querySelector('.back') as HTMLElement;

    if (showBack) {
      front.style.transform = 'perspective(1000px) rotateY(-180deg)';
      back.style.transform = 'perspective(1000px) rotateY(0deg)';
    } else {
      front.style.transform = 'perspective(1000px) rotateY(0deg)';
      back.style.transform = 'perspective(1000px) rotateY(180deg)';
    }
  }

  onSubmit() {
    const paymentDetails = {
      cardNumber: this.cardNumber,
      cardHolder: this.cardHolder,
      expMonth: this.expMonth,
      expYear: this.expYear,
      cvv: this.cvv
    };
    
    console.log('Payment object before sending:', paymentDetails);

    this.paymentService.postMessage(paymentDetails).subscribe(
      response => {
        console.log('Response from server:', response);
        alert("Payment added successfully!");
        this.resetForm();
      },
      error => {
        console.error('Error occurred:', error);
        alert("Failed to add payment. Check console for details.");
      }
    );
  }

  resetForm(): void {
    this.cardNumber = '';
    this.cardHolder = '';
    this.expMonth = '';
    this.expYear = '';
    this.cvv = '';
  }

}
