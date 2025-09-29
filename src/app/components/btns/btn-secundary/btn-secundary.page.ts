import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-btn-secundary',
  templateUrl: './btn-secundary.page.html',
  styleUrls: ['./btn-secundary.page.scss'],
  standalone: true,
  imports: [IonButton, CommonModule, FormsModule]
})
export class BtnSecundaryPage implements OnInit {

  @Input() textoBtn: string = 'Ver más productos'; 

  constructor() { }

  ngOnInit() {
  }

}
