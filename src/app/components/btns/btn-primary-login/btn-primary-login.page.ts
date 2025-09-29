import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-btn-primary-login',
  templateUrl: './btn-primary-login.page.html',
  styleUrls: ['./btn-primary-login.page.scss'],
  standalone: true,
  imports: [IonButton, CommonModule, FormsModule]
})
export class BtnPrimaryLoginPage implements OnInit {

  @Input() textoBtn: string = 'Iniciar sesión'; 

  constructor() { }

  ngOnInit() {
  }

}
