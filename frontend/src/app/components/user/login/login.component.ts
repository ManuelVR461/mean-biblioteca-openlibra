import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { UserInteface } from 'src/app/models/user.interface';
import { AuthService } from './../../../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private route: Router) { }
  user: UserInteface = {
    email: '',
    password: ''
  };
  // tslint:disable-next-line: max-line-length
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  ngOnInit() {
    this.authService.logoutUser();
  }

  onLogin(form: NgForm) {
    return this.authService.loginUser(form.value.email,
                                      form.value.password)
                           .subscribe(user => {
                              this.authService.setUser(user);
                              // console.log('logincomponet: ' + JSON.stringify(user));
                              const data = user;
                              // console.log(data['token'])
                              // tslint:disable-next-line: no-string-literal
                              const token = data['token'];
                              this.authService.setToken(token);
                              this.route.navigate(['/']);
                           });
  }

}
