import { Component } from '@angular/core';
import { AdminServiceService } from 'src/app/service/admin-service.service';
import { Router } from '@angular/router';
import { User } from 'src/app/user';
import { UpdateUserComponent } from '../update-user/update-user.component';
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {

  users: User[] = [];

  constructor(private adminService: AdminServiceService, private router : Router){


  }


  ngOnInit(){
    this.getAllUsers();

  }

  getAllUsers(){
    this.adminService.getAllUsers().subscribe(data=>{
      this.users=data;
    })
  }

  deleteUser(id: number, username: string): void {
    if (confirm(`Are you sure you want to delete user "${username}"?`)) {
      this.adminService.deleteUser(id).subscribe(
        () => {
          alert(`User "${username}" deleted successfully!`);
          this.getAllUsers();
        },
        error => {
          alert(`Failed to delete user "${username}".`);
          console.error('Error deleting user:', error);
        }
      );
    }
  }

  updateUser(id: number){
    console.log(id);
    this.router.navigate(['editUserParAdmin', id])
  }
 


}
