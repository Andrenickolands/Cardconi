import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import {
  IonContent, IonHeader, IonTitle, IonToolbar,
  IonButton, IonItem, IonIcon, IonInput,
  IonLabel, IonCardContent, IonCheckbox
} from '@ionic/angular/standalone';
import { Router } from '@angular/router';

interface Usuario {
  nombre: string;
  apellidos: string;
  email: string;
  telefono: string;
  codigoPais: string;
  fechaNacimiento: string;
  password: string;
  registeredAt: string;
}

interface Country {
  name: string;
  code: string;
  dialCode: string;
  flag: string;
}

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
  standalone: true,
  imports: [
    IonItem, IonButton, IonContent, IonHeader, IonTitle, IonToolbar,
    CommonModule, FormsModule, IonIcon, IonInput, ReactiveFormsModule,
    IonLabel, IonCardContent, IonCheckbox
  ]
})
export class SignUpPage implements OnInit {

  registerForm!: FormGroup;
  showPassword = false;
  showConfirmPassword = false;
  passwordPattern = '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[#$*])[A-Za-z\\d#$*]{8,}$';
  phonePattern = '^[0-9]*$';
  minAge = 18;
  maxDate: string = new Date().toISOString().split('T')[0];

  constructor(
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.registerForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(2)]],
      apellidos: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', [Validators.required, Validators.pattern(this.phonePattern), Validators.minLength(10)]],
      fechaNacimiento: ['', [Validators.required, this.ageValidator]],
      password: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(this.passwordPattern)
      ]],
      confirmPassword: ['', [Validators.required]],
      aceptaTerminos: [false, [Validators.requiredTrue]],
      aceptaPolitica: [false, [Validators.requiredTrue]]
    }, { validators: this.passwordMatchValidator });
  }

  ageValidator(control: AbstractControl): ValidationErrors | null {
    if (!control.value) return null;

    const birthDate = new Date(control.value);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    return age >= 18 ? null : { invalidAge: true };
  }

  passwordMatchValidator(group: AbstractControl): ValidationErrors | null {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;

    return password === confirmPassword ? null : { passwordMismatch: true };
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.registerForm.get(fieldName);
    return !!(field && field.invalid && field.touched);
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  toggleConfirmPassword() {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
  getErrorMessage(fieldName: string): string {
    const field = this.registerForm.get(fieldName);
    if (!field || !field.errors) return '';

    const errors: { [key: string]: any } = {
      'nombre': { 'required': 'El nombre es requerido', 'minlength': 'Debe tener al menos 2 caracteres' },
      'apellidos': { 'required': 'Los apellidos son requeridos', 'minlength': 'Debe tener al menos 2 caracteres' },
      'email': { 'required': 'El correo es requerido', 'email': 'Formato inválido' },
      'telefono': { 'required': 'El teléfono es requerido', 'pattern': 'Solo números', 'minlength': 'Debe tener al menos 10 dígitos' },
      'fechaNacimiento': { 'required': 'La fecha es requerida', 'invalidAge': 'Debes ser mayor de 18 años' },
      'password': { 'required': 'La contraseña es requerida', 'minlength': 'Debe tener al menos 8 caracteres', 'pattern': 'Debe tener mayúscula, minúscula, número y símbolo (#$*)' },
      'confirmPassword': { 'required': 'Debes confirmar tu contraseña' },
      'aceptaTerminos': { 'required': 'Debes aceptar los términos' },
      'aceptaPolitica': { 'required': 'Debes aceptar la política de privacidad' }
    };

    const errorKey = Object.keys(field.errors)[0];
    return errors[fieldName]?.[errorKey] || 'Campo inválido';
  }

  async validateField(fieldName: string) {
    const field = this.registerForm.get(fieldName);
    if (field && field.invalid && field.touched) {
      const errorMessage = this.getErrorMessage(fieldName);
    }
  }

  async onSubmit() {
    if (this.registerForm.valid) {
      const formData = this.registerForm.value;
      const userData = {
        nombre: formData.nombre,
        apellidos: formData.apellidos,
        email: formData.email,
        telefono: formData.telefono,
        fechaNacimiento: formData.fechaNacimiento,
        password: formData.password
      };

      // Guardar en localStorage
      localStorage.setItem('userData', JSON.stringify(userData));
      console.log('Datos guardados en localStorage:', userData);

      // Limpiar formulario
      this.registerForm.reset();

      // Redirigir al login
      this.router.navigate(['/login']);
    } else {
      Object.keys(this.registerForm.controls).forEach(key => {
        this.registerForm.get(key)?.markAsTouched();
      });
    }
  }
}
