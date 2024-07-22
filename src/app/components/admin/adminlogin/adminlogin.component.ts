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
    console.log(this.admin); // Vérifiez les valeurs du formulaire dans la console
    this.adminloginService.loginAdmin(this.admin).subscribe(
      data => {
        console.log("Login Successful:", data); // Déboguez la réponse du backend si nécessaire
        alert("Login Successfully");
        this.goToHomePage(); // Rediriger vers la page d'accueil après un login réussi
      },
      error => {
        console.error("Login Error:", error);
        if (error.status === 401) {
          alert("Login failed: Unauthorized access. Please check your credentials.");
        } else {
          alert("Login failed: " + error.message); // Affichez le message d'erreur général si ce n'est pas une erreur 401
        }
      }
    );
  }

  goToHomePage(): void {
    this.router.navigate(['/accueil']); 
  }

}
