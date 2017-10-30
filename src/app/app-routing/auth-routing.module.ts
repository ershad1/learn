import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthComponent} from '../auth/auth/auth.component';
import {LoginComponent} from '../auth/login/login.component';
import {UserRegistrationComponent} from '../auth/user-registration/user-registration.component';
import {ForgotPasswordComponent} from '../auth/forgot-password/forgot-password.component';

const authRoutes: Routes = [
  {
    path: 'auth', component: AuthComponent,
    children: [
      {path: 'login', component: LoginComponent},
      {path: 'register', component: UserRegistrationComponent},
      {path: 'forgotpassword', component: ForgotPasswordComponent}
    ]
  }

];

@NgModule({
  imports: [
    RouterModule.forChild(authRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AuthRoutingModule {
}
