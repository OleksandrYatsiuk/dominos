import { ChangeDetectionStrategy, Component, inject, Injector, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Actions, Store } from '@ngxs/store';
import { ofActionInProcess } from '@dominos/core';
import { AsyncPipe } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { AuthLogin } from '../../../../core/states/auth/auth.actions';

@Component({
  selector: 'app-login',
  imports: [
    AsyncPipe,
    ReactiveFormsModule, InputTextModule, PasswordModule, ButtonModule, RouterModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {
  private readonly store = inject(Store);

  form!: FormGroup;

  constructor(
    readonly injector: Injector,
  ) { }

  loading$ = inject(Actions).pipe(ofActionInProcess(AuthLogin));

  ngOnInit(): void {
    this.form = this.injector.get(FormBuilder).group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }


  onSave(): void {
    this.form.markAllAsTouched()
    if (this.form.valid) {
      this.store.dispatch(new AuthLogin(this.form.value));
    }
  }
}
