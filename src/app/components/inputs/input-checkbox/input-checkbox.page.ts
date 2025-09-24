import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-input-checkbox',
  templateUrl: './input-checkbox.page.html',
  styleUrls: ['./input-checkbox.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class InputCheckboxPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
