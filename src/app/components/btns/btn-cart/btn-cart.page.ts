import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-btn-cart',
  templateUrl: './btn-cart.page.html',
  styleUrls: ['./btn-cart.page.scss'],
  standalone: true,
  imports: [IonButton, CommonModule, FormsModule]
})
export class BtnCartPage implements OnInit {

  @Input() textoBtn: string = 'Agregar al carrito';
  @Input() counter: string = '1';

  constructor() { }

  ngOnInit() {
  }

}
