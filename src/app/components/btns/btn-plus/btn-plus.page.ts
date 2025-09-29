import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-btn-plus',
  templateUrl: './btn-plus.page.html',
  styleUrls: ['./btn-plus.page.scss'],
  standalone: true,
  imports: [IonButton, CommonModule, FormsModule]
})
export class BtnPlusPage implements OnInit {

  @Input() cant: string = "0";

  constructor() { }

  ngOnInit() {
  }

}
