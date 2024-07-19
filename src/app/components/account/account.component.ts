import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AccountServiceService } from 'src/app/service/account-service.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {

  user: any = {
    username: '',
    email: '',
    phone: '',
    password: ''
  };

  constructor(private accountuserService: AccountServiceService, private router: Router) {}

  ngOnInit() {}

  userLogin() {
    console.log(this.user);
    this.accountuserService.loginUser(this.user).subscribe(
      data => {
        alert("Login Successfully");
        this.goToHomePage(); // Rediriger vers la page d'accueil après un login réussi
      },
      error => {
        console.error("Login Error:", error);
        if (error.status === 401) {
          alert("Login failed: Unauthorized access. Please check your credentials.");
        } else {
          alert("Login failed: " + error.message);
        }
      }
    );
  }
  

  userRegister() {
    console.log(this.user);
    this.accountuserService.registerUser(this.user).subscribe(
      data => {
        alert("Register Successful");
      },
      error => {
        alert("Register failed: " + error.message);
      }
    );
  }

  goToHomePage(): void {
    this.router.navigate(['/userproducts']); 
  }

}
