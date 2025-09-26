import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { HeaderLandingPage } from "src/app/components/headers/header-landing/header-landing.page";
import { BtnCtaPage } from "src/app/components/btns/btn-cta/btn-cta.page";
import { FooterLandingPage } from "src/app/components/footers/footer-landing/footer-landing.page";

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule, HeaderLandingPage, BtnCtaPage, FooterLandingPage]
})
export class HomePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
