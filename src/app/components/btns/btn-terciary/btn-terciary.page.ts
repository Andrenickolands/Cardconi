import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-btn-terciary',
  templateUrl: './btn-terciary.page.html',
  styleUrls: ['./btn-terciary.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class BtnTerciaryPage implements OnInit {

  @Input() textoBtn: string = 'Bancaria';

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  async goToCart() {
    this.router.navigate(['/cart']);
  }

}
