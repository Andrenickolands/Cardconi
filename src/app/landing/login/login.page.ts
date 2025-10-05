import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonLabel, IonInput, IonButton, IonIcon, IonInputPasswordToggle } from '@ionic/angular/standalone';
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
  imports: [IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonItem, IonLabel, IonInput, IonIcon, IonInputPasswordToggle, BtnCtaPage, BtnCartPage, ReviewCardPage, BtnPrimaryLoginPage, BtnSecundaryLoginPage]
})
export class LoginPage implements OnInit {
   email: string = '';
   password: string = '';
   showPassword: boolean = false;

  constructor() { }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  ngOnInit() {
  }

}
