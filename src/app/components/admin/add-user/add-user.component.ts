import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/service/user-service.service';
import { User } from 'src/app/user';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {

  users: any ={  
    username: '',
    email: '',
    phone: '',
    password: ''
  };

  constructor(private router: Router, private userService: UserServiceService) { } 
  addUser() {
    console.log(this.users); 
    this.userService.addUser(this.users).subscribe(
      () => {
        alert("Enregistrement réussi"); 
        this.router.navigate(['/dashboard']); 
      },
      error => {
        alert("Échec de l'enregistrement: " + error.message); 
      }
    );
  }

}
