import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent } from '@ionic/angular/standalone';
import { HeaderLandingPage } from "src/app/components/header/header-landing/header-landing.page";

@Component({
  selector: 'app-500',
  templateUrl: './500.page.html',
  styleUrls: ['./500.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule, HeaderLandingPage]
})
export class Page500 implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
