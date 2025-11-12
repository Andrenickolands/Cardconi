import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-btn-cart',
  templateUrl: './btn-cart.page.html',
  styleUrls: ['./btn-cart.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class BtnCartPage implements OnInit {

  @Input() textoBtn: string = 'Agregar al carrito';
  @Input() counter: string = '1';

  constructor(private router: Router) { }

  ngOnInit() {
  }

    async goToCart(){
    this.router.navigate(['/cart']);
  }
}
