import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-btn-floating',
  templateUrl: './btn-floating.page.html',
  styleUrls: ['./btn-floating.page.scss'],
  standalone: true,
  imports: [IonButton, CommonModule, FormsModule]
})
export class BtnFloatingPage implements OnInit {

  @Input() text: string = 'Hola, un gusto atenderte'; 

  constructor() { }

  ngOnInit() {
  }

}
