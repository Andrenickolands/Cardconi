import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonItem, IonInput, IonButton, IonIcon, ToastController } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { BtnPrimaryLoginPage } from 'src/app/components/btns/btn-primary-login/btn-primary-login.page';
import { BtnSecundaryLoginPage } from 'src/app/components/btns/btn-secundary-login/btn-secundary-login.page';
import { AuthService, Usuario } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonContent, IonItem, IonInput, IonButton, IonIcon, CommonModule, FormsModule, BtnPrimaryLoginPage, BtnSecundaryLoginPage]
})
export class LoginPage implements OnInit {

  email: string = '';
  password: string = '';
  showPassword: boolean = false;

  constructor(
    private toastController: ToastController,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit() {}

  togglePassword() {
    this.showPassword = !this.showPassword;
  }


  login() {
    const storedUser: Usuario | null = this.authService.getStoredUser();

    if (storedUser) {
      if (storedUser.email === this.email && storedUser.password === this.password) {
        this.authService.login(storedUser); // actualiza sesión
        this.presentToast(`¡Bienvenido de nuevo, ${storedUser.nombre}!`, 'success');
        this.router.navigate(['/home']);
      } else {
        this.presentToast('Correo o contraseña incorrectos', 'danger');
      }
    } else {
      this.presentToast('No hay ningún usuario registrado aún', 'warning');
    }
  }

  goToRegister() {
    this.router.navigate(['/sign-up']);
  }

  async presentToast(message: string, type: 'success' | 'danger' | 'warning') {
    const toast = await this.toastController.create({
      message,
      duration: 2500,
      position: 'bottom',
      color: type,
      cssClass: 'custom-toast'
    });
    await toast.present();
  }
}
