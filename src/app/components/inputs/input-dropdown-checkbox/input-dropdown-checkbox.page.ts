import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-input-dropdown-checkbox',
  templateUrl: './input-dropdown-checkbox.page.html',
  styleUrls: ['./input-dropdown-checkbox.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class InputDropdownCheckboxPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
