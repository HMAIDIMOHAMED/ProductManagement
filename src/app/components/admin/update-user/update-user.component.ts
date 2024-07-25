import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserServiceService } from 'src/app/service/user-service.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  user: User = new User();

  constructor(private router: Router, private userService: UserServiceService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const userId = this.route.snapshot.params['id']; // Utilisez 'id' plutôt que 'email'
    console.log('User ID:', userId);
    this.userService.getUserById(userId).subscribe(
      data => {
        this.user = data;
        console.log('User:', this.user);
      },
      error => {
        console.error("Error fetching user:", error);
      }
    );
  }

  updateUser() {
    this.userService.updateUserById(this.user.id, this.user).subscribe(
      data => {
        alert("User Updated Successfully");
        this.router.navigate(['/dashboard']);
      },
      error => {
        console.error("Update User Error:", error);
        alert("Failed to update user. Please try again.");
      }
    );
  }

}
