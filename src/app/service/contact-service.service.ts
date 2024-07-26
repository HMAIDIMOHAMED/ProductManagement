import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Message } from '../message';

@Injectable({
  providedIn: 'root'
})
export class ContactServiceService {
  private baseUrl = 'http://localhost:8080/message/add';
  private baseUrl1 = 'http://localhost:8080/message';

  constructor(private httpClient: HttpClient) { }

  postMessage(message: Message): Observable<Message> {
    return this.httpClient.post<Message>(this.baseUrl, message);
  }

  getAllMessages(): Observable<Message[]> {
    return this.httpClient.get<Message[]>(this.baseUrl1);
  }
}
