import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:8081'; // Replace with your Spring Boot backend URL

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    const body = {
      username: username,
      password: password
    };
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post<any>(`${this.baseUrl}/admins/login`, body, httpOptions);
  }


  getToken(): string | null {
    return localStorage.getItem('jwtToken');
  }

  fetchData(): Observable<any> {
    const jwtToken = this.getToken();
    if (!jwtToken) {
      // Handle the case where there's no token (user is not authenticated)
      // You might want to redirect the user to the login page or display an error message
      return throwError('No JWT token available');
    }
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${jwtToken}`
      })
    };
    return this.http.get<any>(`${this.baseUrl}/your-api-endpoint`, httpOptions);
  }
}
