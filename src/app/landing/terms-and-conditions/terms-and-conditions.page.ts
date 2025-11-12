import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent} from '@ionic/angular/standalone';
import { HeaderLandingPage } from "src/app/components/header/header-landing/header-landing.page";

@Component({
  selector: 'app-terms-and-conditions',
  templateUrl: './terms-and-conditions.page.html',
  styleUrls: ['./terms-and-conditions.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule, HeaderLandingPage]
})
export class TermsAndConditionsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
