import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  private baseUrl = 'http://localhost:8080/api/v1/test';

  constructor(private http: HttpClient) { }
  // getOrderDetail(): Observable<any> {
  //   return this.http.get(`${this.baseUrl}/1`);
  // }
  getTest(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
