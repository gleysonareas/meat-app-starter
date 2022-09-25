import { UserModel } from '../../shared/models/user.model';
import { LoginService } from '../../core/services/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mt-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  constructor(
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
  }

  user(): UserModel {
    return this.loginService.user as UserModel;
  }

  isLoggedIn(): boolean {
    return this.loginService.isLoggedIn()
  }

  login() {
    this.loginService.handleLogin()
  }

  logout() {
    this.loginService.logout()
  }
}
