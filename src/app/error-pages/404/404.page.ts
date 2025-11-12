import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent} from '@ionic/angular/standalone';
import { HeaderLandingPage } from "src/app/components/header/header-landing/header-landing.page";

@Component({
  selector: 'app-404',
  templateUrl: './404.page.html',
  styleUrls: ['./404.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule, HeaderLandingPage]
})
export class Page404 implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
