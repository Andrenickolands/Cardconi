import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent} from '@ionic/angular/standalone';
import { HeaderLandingPage } from "src/app/components/header/header-landing/header-landing.page";

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.page.html',
  styleUrls: ['./about-us.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule, HeaderLandingPage]
})
export class AboutUsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
