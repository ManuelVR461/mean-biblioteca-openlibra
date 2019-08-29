import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { OfertasComponent } from './components/ofertas/ofertas.component';
import { HeroComponent } from './components/hero/hero.component';
import { DetalleLibrosComponent } from './components/detalle-libros/detalle-libros.component';
import { ListLibrosComponent } from './components/admin/list-libros/list-libros.component';
import { LoginComponent } from './components/user/login/login.component';
import { RegisterComponent } from './components/user/register/register.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { Page404Component } from './components/page404/page404.component';

// Services ->Agregamos este modulo en providers.
import { DataApiService } from './services/data-api.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    OfertasComponent,
    HeroComponent,
    DetalleLibrosComponent,
    ListLibrosComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    Page404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DataApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
