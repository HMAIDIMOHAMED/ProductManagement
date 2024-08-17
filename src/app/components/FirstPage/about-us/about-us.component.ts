import { Component } from '@angular/core';
import { EmailService } from 'src/app/service/email.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent {
  constructor(private emailService: EmailService){}



  private access_key="db6ac238-08e6-4057-a2cf-7adeac39ad72";
  messages = {
    name: '',
    email: '',
    telephone:'',
    subject:'',
    message: '',
  };

  async sendEmail(contactForm: NgForm) {
    let formData = new FormData();
    formData.append('name', this.messages.name);
    formData.append('email', this.messages.email);
    formData.append('téléphone', this.messages.telephone);
    formData.append('subject', this.messages.subject);
    formData.append('message', this.messages.message);
    formData.append('access_key', this.access_key);
    formData.append('subject', 'Email Support From Your Site');
    formData.append('from_name', 'Contact Notification');
  
    try {
      const response = await this.emailService.sendEmail(formData);
      if (response.ok) {
        alert('Votre message a été envoyé avec succès!');
      } else {
        alert('Il y a eu un problème avec l\'envoi de votre message.');
      }
    } catch (error) {
      alert('Erreur réseau : Veuillez réessayer plus tard.');
    }
  }

}
