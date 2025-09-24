import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-btn-primary',
  templateUrl: './btn-primary.page.html',
  styleUrls: ['./btn-primary.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class BtnPrimaryPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
