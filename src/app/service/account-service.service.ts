import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class AccountServiceService {

  private baseURL = "http://localhost:8080/user/login";
  private baseURL1 = "http://localhost:8080/user/register"

  constructor(private httpClient: HttpClient) { }

  loginUser(user: User): Observable<User> {
    console.log(user)
    return this.httpClient.post<User>(this.baseURL,user);
  }

  registerUser(user: User): Observable<User> {
    console.log(user)
    return this.httpClient.post<User>(this.baseURL1, user)
  }

    
  }

