import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent } from '@ionic/angular/standalone';
import { HeaderLandingPage } from "src/app/components/header/header-landing/header-landing.page";

@Component({
  selector: 'app-403',
  templateUrl: './403.page.html',
  styleUrls: ['./403.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule, HeaderLandingPage]
})
export class Page403 implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
