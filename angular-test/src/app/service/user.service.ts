import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  updateUser(mark: number): Observable<Object> {
    return this.http.put(`http://localhost:8080/api/v1/user/1/${mark}`,mark);
  }
}
