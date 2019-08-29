import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public authService: AuthService, private route: Router) { }
  public appName = 'Biblioteca';
  ngOnInit() {
  }

  onLogout() {
    this.authService.logoutUser();
    this.route.navigate(['/user/login']);
  }

}
