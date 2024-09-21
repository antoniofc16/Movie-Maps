import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { AppMaterialModule } from '../../../app-material.module';
import { RecaptchaComponent } from '../../../commons/components/atoms/recaptcha/recaptcha.component';
import { AuthService } from '../../../core/services/auth/api/auth.service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [AppMaterialModule, CommonModule, RecaptchaComponent, ReactiveFormsModule]

})
export class LoginComponent implements OnInit {
  private _snackBar = inject(MatSnackBar);

  constructor(private _authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  userFormControl: FormControl = new FormControl();
  passwordFormControl: FormControl = new FormControl();
  resultCaptcha: boolean = false;
  hide = signal(true);

  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

  resolvedCaptcha(response: boolean | null){
    if (response != null)
    this.resultCaptcha = response;
  }

  login(){
    if (!this.resultCaptcha){
      this._snackBar.open('Complete el captcha', 'Ok', { duration: 2000, panelClass: ['red-snackbar'] });
      return;
    }

    var loginResult = this._authService.login(this.userFormControl.value, this.passwordFormControl.value)

    if (!loginResult){
      this._snackBar.open('Credenciales invalidas!', 'Ok', { duration: 2000, panelClass: ['red-snackbar'] });
      return;
    }

    this.router.navigate(['/movies']);
  }
}
