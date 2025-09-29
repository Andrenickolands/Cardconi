import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-btn-cta',
  templateUrl: './btn-cta.page.html',
  styleUrls: ['./btn-cta.page.scss'],
  standalone: true,
  imports: [IonButton, CommonModule, FormsModule]
})
export class BtnCtaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
