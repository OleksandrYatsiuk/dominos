import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasswordModule } from 'primeng/password';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-password',
  imports: [CommonModule, PasswordModule, ReactiveFormsModule, ButtonModule],
  templateUrl: './password.component.html',
  styleUrl: './password.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PasswordComponent implements OnInit {
  private formBuilder = inject(FormBuilder);

  form!: FormGroup;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      password: this.formBuilder.control('', [Validators.required]),
      newPassword: this.formBuilder.control('', [Validators.required]),
      confirmPassword: this.formBuilder.control('', [Validators.required]),
    })
  }

  onSave(): void {
    this.form.markAllAsTouched();
  }
}
