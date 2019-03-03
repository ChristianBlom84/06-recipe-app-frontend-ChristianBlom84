import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { JwtService } from './jwt.service';
import 'hammerjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'recipe-app-frontend-ChristianBlom';

  constructor(
    private jwtService: JwtService,
    private router: Router
  ) {}

  logout() {
    this.jwtService.logout();
    this.router.navigate(['']);
  }

  loggedIn() {
    return this.jwtService.loggedIn;
  }
}
