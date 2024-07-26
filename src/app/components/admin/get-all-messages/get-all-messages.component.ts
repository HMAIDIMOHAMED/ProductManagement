import { Component, OnInit } from '@angular/core';
import { ContactServiceService } from 'src/app/service/contact-service.service';

@Component({
  selector: 'app-get-all-messages',
  templateUrl: './get-all-messages.component.html',
  styleUrls: ['./get-all-messages.component.css']
})
export class GetAllMessagesComponent implements OnInit {

  messages: any[] = []; 

  constructor(private contactService: ContactServiceService) { }

  ngOnInit(): void {
    this.getAllMessages();
  }

  getAllMessages(): void {
    this.contactService.getAllMessages().subscribe({
      next: (data) => {
        if (Array.isArray(data)) {
          this.messages = data;
        } else {
          console.error('Les données reçues ne sont pas un tableau:', data);
        }
      },
      error: (err) => {
        console.error('Erreur lors de la récupération des messages:', err);
      }
    });
  }
}
