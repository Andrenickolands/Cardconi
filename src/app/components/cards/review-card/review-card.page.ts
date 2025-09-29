import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-review-card',
  templateUrl: './review-card.page.html',
  styleUrls: ['./review-card.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class ReviewCardPage implements OnInit {

  @Input() nameUser: string = 'Nombre';
  @Input() review: string = 'Me encantó mucho el producto esta genial lo recomiendo mucho no se arrepentirán de tenerla';


  constructor() { }

  ngOnInit() {
  }

}
