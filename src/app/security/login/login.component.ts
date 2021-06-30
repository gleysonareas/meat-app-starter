import { ActivatedRoute } from '@angular/router';
import { NotificationService } from './../../services/notification.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'app/services/login.service';

@Component({
  selector: 'mt-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup
  navigateTo: string

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private notificationService: NotificationService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: this.formBuilder.control('', [Validators.required, Validators.email]),
      password: this.formBuilder.control('', [Validators.required])
    })
    this.navigateTo = this.activatedRoute.snapshot.params['to'] || '/'
  }

  login() {
    this.loginService.login(
      this.loginForm.value.email,
      this.loginForm.value.password
    ).subscribe(user => this.notificationService.notify(`Bem vindo(a), ${user.name}`),
      response => this.notificationService.notify(response.error.message), () => { this.router.navigate([this.navigateTo]) })//HttpErrorResponse
  }
}
