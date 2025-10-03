import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonFooter, IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'app-footer-landing',
  templateUrl: './footer-landing.page.html',
  styleUrls: ['./footer-landing.page.scss'],
  standalone: true,
  imports: [IonIcon, IonFooter, CommonModule, FormsModule]
})
export class FooterLandingPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
