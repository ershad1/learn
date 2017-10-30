import {Component, OnInit} from '@angular/core';
import {Login, LoginStatus} from './login';
import {Router} from '@angular/router';
import {AuthService} from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  alertStyle = '';
  loginStatus = new LoginStatus('', '');
  model = new Login('', '');

  constructor(private authService: AuthService, private router: Router) {
  }

  onLogin() {
    this.initLogin();
    this.authService.login(this.model)
      .subscribe((status: LoginStatus) => {
        this.loginStatus = status;
        if (status.code === 'FAILURE') {
          this.alertStyle = 'alert alert-danger';
        }
      });
  }

  onLogout() {
    this.authService.logout();
  }

  private initLogin() {
    this.alertStyle = '';
    this.loginStatus.code = '';
    this.loginStatus.message = '';
  }
}
