import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-btn-primary',
  templateUrl: './btn-primary.page.html',
  styleUrls: ['./btn-primary.page.scss'],
  standalone: true,
  imports: [IonButton, CommonModule, FormsModule]
})
export class BtnPrimaryPage implements OnInit {

  @Input() textoBtn: string = 'Agregar al carrito'; 

  constructor() { }

  ngOnInit() {
  }

}
