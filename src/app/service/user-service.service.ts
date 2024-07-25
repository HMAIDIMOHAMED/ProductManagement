import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private baseURL1 = "http://localhost:8080/user/register";
  private baseURL = "http://localhost:8080/user";



  constructor(private httpClient: HttpClient) { }

  addUser(user: User): Observable<User> {
    return this.httpClient.post<User>(this.baseURL1, user);
  }
  updateUserById(id: number, user: User): Observable<User> {
    return this.httpClient.put<User>(`${this.baseURL}/${id}`, user); 
  }
  
  
  getUserById(id: number): Observable<User> {
    return this.httpClient.get<User>(`${this.baseURL}/${id}`);
  }

  
}
