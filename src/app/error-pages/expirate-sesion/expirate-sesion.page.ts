import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-expirate-sesion',
  templateUrl: './expirate-sesion.page.html',
  styleUrls: ['./expirate-sesion.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ExpirateSesionPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
