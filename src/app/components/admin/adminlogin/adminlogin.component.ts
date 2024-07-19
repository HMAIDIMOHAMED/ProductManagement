
import { Component } from '@angular/core';
import { AdminServiceService } from 'src/app/service/admin-service.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent {

  admin: any = {
    username: '',
    password: ''
  };

  constructor(private adminloginService: AdminServiceService, private router: Router) {}

  adminLogin() {
    console.log(this.admin);
    this.adminloginService.loginAdmin(this.admin).subscribe(
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

  goToHomePage(): void {
    this.router.navigate(['/accueil']); 
  }

}
