import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonButton, IonAccordion } from '@ionic/angular/standalone';
import { HeaderLandingPage } from "src/app/components/header/header-landing/header-landing.page";
import { BtnCtaPage } from "src/app/components/btns/btn-cta/btn-cta.page";
import { FooterLandingPage } from "src/app/components/footer/footer-landing/footer-landing.page";
import { BtnCartPage } from "src/app/components/btns/btn-cart/btn-cart.page";
import { ReviewCardPage } from "src/app/components/cards/review-card/review-card.page";
import { BtnPrimaryLoginPage } from "src/app/components/btns/btn-primary-login/btn-primary-login.page";
import { BtnFloatingPage } from 'src/app/components/btns/btn-floating/btn-floating.page';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule, HeaderLandingPage, BtnCtaPage, FooterLandingPage, BtnCartPage, IonAccordion, ReviewCardPage, BtnPrimaryLoginPage, BtnFloatingPage]
})
export class HomePage implements OnInit {
  scrollProgress: number = 0;
  cardsHovered: boolean[] = [false, false];

  constructor() { }

  ngOnInit() {
  }

  onContentScroll(event: any) {
    const scrollTop = event.detail.scrollTop;
    const scrollHeight = event.detail.scrollHeight - event.detail.clientHeight;
    this.scrollProgress = Math.min(scrollTop / Math.max(scrollHeight, 1), 1);
  }

  hoverCard(index: number, isHovering: boolean) {
    this.cardsHovered[index] = isHovering;
  }

  gotToCards(){
  
  }

}
