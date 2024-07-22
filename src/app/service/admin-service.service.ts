

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Admin } from '../admin';
import { User } from '../user';
@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  private baseURL = "http://localhost:8080/admin/login";
  private baseURL1 = "http://localhost:8080/user";
  private baseURL2 = "http://localhost:8080/user/register";



  constructor(private httpClient: HttpClient) { }

  loginAdmin(admin: Admin): Observable<Admin> {
    console.log(admin)
    return this.httpClient.post<Admin>(this.baseURL,admin);
  }
  addUser(user: User): Observable<User> {
    return this.httpClient.post<User>(this.baseURL2, user);
  }

  getAllUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.baseURL1);
  }

  getUserById(id: number): Observable<User> {
    return this.httpClient.get<User>(`${this.baseURL1}/${id}`);
  }

  updateUser(user: User): Observable<User> {
    return this.httpClient.put<User>(`${this.baseURL1}/${user.id}`, user);
  }

  deleteUser(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.baseURL1}/${id}`);
  }

  getUserByEmail(email: string): Observable<User> {
    return this.httpClient.get<User>(`${this.baseURL1}/email/${email}`);
  }


}
