import { Component } from '@angular/core';
import { ContactServiceService } from 'src/app/service/contact-service.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  messages = {
    name: '',
    email: '',
    message: ''
  };
  

  constructor(private contactService: ContactServiceService) { }

  addMessage(): void {
    console.log('Message object before sending:', this.messages);
    
    this.contactService.postMessage(this.messages).subscribe(
      response => {
        console.log('Response from server:', response);
        alert("Message added successfully!");
        this.messages = {
          name: '',
          email: '',
          message: ''
        };
      },
      error => {
        console.error('Error occurred:', error);
        alert("Failed to add message. Check console for details.");
      }
    );
  }
  
}
