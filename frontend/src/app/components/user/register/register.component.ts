import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UserInteface } from './../../../models/user.interface';
import { AuthService } from './../../../services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService, private route: Router) { }
  user: UserInteface = {
    nombre: '',
    email: '',
    password: ''
  };

  ngOnInit() {
  }

  onRegister(form: NgForm) {
    this.authService.registerUser(form.value.nombre, form.value.email, form.value.password)
                    .subscribe( user => {
                        // this.authService.setUser(user);
                        // const token = user._id;
                        // this.authService.setToken(token);
                        this.route.navigate(['/user/login']);
                  });

  }
}
