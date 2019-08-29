import { NavbarComponent } from './components/navbar/navbar.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { OfertasComponent } from './components/ofertas/ofertas.component';
import { LoginComponent } from './components/user/login/login.component';
import { ListLibrosComponent } from './components/admin/list-libros/list-libros.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { RegisterComponent } from './components/user/register/register.component';
import { DetalleLibrosComponent } from './components/detalle-libros/detalle-libros.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path: '', component: HomeComponent,  canActivate: [AuthGuard]},
  {path: 'book/:id', component: DetalleLibrosComponent, canActivate: [AuthGuard]},
  {path: 'ofertas', component: OfertasComponent},
  {path: 'user/register', component: RegisterComponent},
  {path: 'user/profile', component: ProfileComponent , canActivate: [AuthGuard]},
  {path: 'admin/list-libros', component: ListLibrosComponent,  canActivate: [AuthGuard]},
  {path: 'user/login', component: LoginComponent, pathMatch: 'full'},
  {path: 'user/logout', component: NavbarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
