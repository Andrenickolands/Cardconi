import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonIcon,
  IonInputPasswordToggle,
  ToastController
} from '@ionic/angular/standalone';

import { BtnCartPage } from "src/app/components/btns/btn-cart/btn-cart.page";
import { ReviewCardPage } from "src/app/components/cards/review-card/review-card.page";
import { BtnCtaPage } from "src/app/components/btns/btn-cta/btn-cta.page";
import { BtnPrimaryLoginPage } from "src/app/components/btns/btn-primary-login/btn-primary-login.page";
import { BtnSecundaryLoginPage } from "src/app/components/btns/btn-secundary-login/btn-secundary-login.page";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    IonButton,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonItem,
    IonLabel,
    IonInput,
    IonIcon,
    IonInputPasswordToggle,
    BtnCtaPage,
    BtnCartPage,
    ReviewCardPage,
    BtnPrimaryLoginPage,
    BtnSecundaryLoginPage
  ]
})
export class LoginPage implements OnInit {

  email: string = '';
  password: string = '';
  showPassword: boolean = false;

  constructor(private toastController: ToastController) { }

  ngOnInit() { }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }


  login() {
    const storedData = localStorage.getItem('userData');

    if (storedData) {
      const user = JSON.parse(storedData);

      if (user.email === this.email && user.password === this.password) {

        this.presentToast(`¡Bienvenido de nuevo, ${user.name}!`, 'success');
        console.log('Inicio de sesión correcto');
      } else {

        this.presentToast('Correo o contraseña incorrectos', 'danger');
      }
    } else {
      this.presentToast('No hay ningún usuario registrado aún', 'warning');
    }
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
