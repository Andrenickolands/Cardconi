import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  IonContent, IonHeader, IonTitle, IonToolbar,
  IonButton, IonItem, IonIcon, IonInput, ToastController,
  IonLabel, IonCardContent, IonCheckbox
} from '@ionic/angular/standalone';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';

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
  showPassword: boolean = false;
  showConfirmPassword: boolean = false;
  passwordPattern: string = '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[#$*])[A-Za-z\\d#$*]{8,}$';
  phonePattern: string = '^[0-9]*$';
  minAge: number = 18;
  maxDate: string = new Date().toISOString().split('T')[0]; // Fecha máxima para el datepicker

  constructor(
     private router: Router,
    private fb: FormBuilder,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    this.initForm();
    const savedData = localStorage.getItem('userData');
    if (savedData) {
      this.registerForm.patchValue(JSON.parse(savedData));
      console.log('Datos cargados desde localStorage:', JSON.parse(savedData));
    }
  }

  initForm() {
    this.registerForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(2)]],
      apellidos: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', [Validators.required, Validators.pattern('^[0-9]*$'), Validators.minLength(10)]],
      fechaNacimiento: ['', [Validators.required, this.ageValidator]],
      password: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$*])[A-Za-z\d#$*]{8,}$/)
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

  goToLogin() {
    this.router.navigate(['/login']);
  }

  toggleConfirmPassword() {
    this.showConfirmPassword = !this.showConfirmPassword;
  }
  async showToast(message: string, color: string = 'danger') {
    const toast = await this.toastController.create({
      message: message,
      duration: 3000,
      position: 'top',
      color: color,
      cssClass: 'custom-toast',
      buttons: [
        {
          icon: 'close',
          role: 'cancel'
        }
      ]
    });
    await toast.present();
  }
  getErrorMessage(fieldName: string): string {
    const field = this.registerForm.get(fieldName);
    if (!field || !field.errors) return '';

    const errors: { [key: string]: any } = {
      'nombre': {
        'required': 'El nombre es requerido',
        'minlength': 'El nombre debe tener al menos 2 caracteres'
      },
      'apellidos': {
        'required': 'Los apellidos son requeridos',
        'minlength': 'Los apellidos deben tener al menos 2 caracteres'
      },
      'email': {
        'required': 'El correo electrónico es requerido',
        'email': 'El formato del correo es inválido'
      },
      'telefono': {
        'required': 'El número de teléfono es requerido',
        'pattern': 'El teléfono solo debe contener números',
        'minlength': 'El teléfono debe tener al menos 10 dígitos'
      },
      'fechaNacimiento': {
        'required': 'La fecha de nacimiento es requerida',
        'invalidAge': 'Debes ser mayor de 18 años para registrarte'
      },
      'password': {
        'required': 'La contraseña es requerida',
        'minlength': 'Debe tener al menos 8 caracteres',
        'pattern': 'Debe tener mayúscula, minúscula, número y símbolo (#$*)'
      },
      'confirmPassword': {
        'required': 'Debes confirmar tu contraseña'
      },
      'aceptaTerminos': {
        'required': 'Debes aceptar los términos y condiciones'
      },
      'aceptaPolitica': {
        'required': 'Debes aceptar la política de privacidad'
      }
    };

    const errorKey = Object.keys(field.errors)[0];
    return errors[fieldName]?.[errorKey] || 'Campo inválido';
  }
  async validateField(fieldName: string) {
    const field = this.registerForm.get(fieldName);
    if (field && field.invalid && field.touched) {
      const errorMessage = this.getErrorMessage(fieldName);
      await this.showToast(errorMessage);
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
        password: formData.password // ⚠️ Puedes quitarla si no quieres guardarla
      };

      localStorage.setItem('userData', JSON.stringify(userData));
      console.log('Datos guardados en Local Storage:', userData);

      await this.showToast('`Bienvenido a Cardconi ${nombreUsuario}`' , 'success');

      this.registerForm.reset();
    } else {
      Object.keys(this.registerForm.controls).forEach(key => {
        this.registerForm.get(key)?.markAsTouched();
      });

      const firstErrorField = Object.keys(this.registerForm.controls).find(key => {
        const control = this.registerForm.get(key);
        return control && control.invalid;
      });

      if (firstErrorField) {
        const errorMessage = this.getErrorMessage(firstErrorField);
        await this.showToast(errorMessage);
      }

      if (this.registerForm.errors?.['passwordMismatch']) {
        await this.showToast('Las contraseñas no coinciden');
      }
    }
  }
}
