import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-btn-terciary',
  templateUrl: './btn-terciary.page.html',
  styleUrls: ['./btn-terciary.page.scss'],
  standalone: true,
  imports: [IonButton, CommonModule, FormsModule]
})
export class BtnTerciaryPage implements OnInit {

  @Input() textoBtn: string = 'Bancaria'; 

  constructor() { }

  ngOnInit() {
  }

}
