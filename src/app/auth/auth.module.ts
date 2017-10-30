import {NgModule} from '@angular/core';
import {AuthRoutingModule} from '../app-routing/auth-routing.module';
import {LoginComponent} from './login/login.component';
import {UserRegistrationComponent} from './user-registration/user-registration.component';
import {ForgotPasswordComponent} from './forgot-password/forgot-password.component';
import {AuthComponent} from './auth/auth.component';
import {LogoutComponent} from './logout/logout.component';


@NgModule({
  imports: [
    AuthRoutingModule
  ],
  declarations: [
    AuthComponent,
    LoginComponent,
    UserRegistrationComponent,
    ForgotPasswordComponent,
    LogoutComponent]
})
export class AuthModule {
}
