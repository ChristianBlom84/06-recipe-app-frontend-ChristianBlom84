import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class JwtService {

  constructor(
    private httpClient: HttpClient
  ) { }

  login(email: string, password: string) {
    return this.httpClient.post<{access_token: string}>(`${environment.laravelBaseUrl}/login`, {email, password}).pipe(tap(res => {
      localStorage.setItem('access_token', res.access_token);
    }));
  }

  register(email: string, password: string) {
    return this.httpClient.post<{access_token: string}>(`${environment.laravelBaseUrl}/register`, {email, password}).pipe(tap(res => {
      this.login(email, password);
    }));
  }

  logout() {
    localStorage.removeItem('access_token');
  }
}
