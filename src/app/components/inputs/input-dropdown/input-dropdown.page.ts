import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-input-dropdown',
  templateUrl: './input-dropdown.page.html',
  styleUrls: ['./input-dropdown.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class InputDropdownPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
