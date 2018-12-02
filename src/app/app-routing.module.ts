import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'members',
    canActivate: [AuthGuardService],
    loadChildren: './members/member-routing.module#MemberRoutingModule'
  },
  {
    path: 'login',
    loadChildren: './public/login/login.module#LoginPageModule'
  },
  {
    path: 'register',
    loadChildren: './public/register/register.module#RegisterPageModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
