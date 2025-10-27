import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-btn-see-more',
  templateUrl: './btn-see-more.page.html',
  styleUrls: ['./btn-see-more.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class BtnSeeMorePage implements OnInit {

  @Input() textoBtn: string = 'Ver más'; 

  constructor() { }

  ngOnInit() {
  }

}
