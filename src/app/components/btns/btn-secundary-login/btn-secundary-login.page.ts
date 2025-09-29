import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-btn-secundary-login',
  templateUrl: './btn-secundary-login.page.html',
  styleUrls: ['./btn-secundary-login.page.scss'],
  standalone: true,
  imports: [IonButton, CommonModule, FormsModule]
})
export class BtnSecundaryLoginPage implements OnInit {

   @Input() textoBtn: string = 'Registrate'; 
   
  constructor() { }

  ngOnInit() {
  }

}
