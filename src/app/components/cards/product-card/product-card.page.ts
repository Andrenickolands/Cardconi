import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BtnPlusPage } from "../../btns/btn-plus/btn-plus.page";
import { BtnPrimaryPage } from "../../btns/btn-primary/btn-primary.page";
import { InputDropdownColorsPage } from "../../inputs/input-dropdown-colors/input-dropdown-colors.page";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.page.html',
  styleUrls: ['./product-card.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, BtnPlusPage, BtnPrimaryPage, InputDropdownColorsPage]
})
export class ProductCardPage implements OnInit {

  @Input() nameProduct: string = 'Nombre';
  @Input() descriptionProduct: string = 'Me encantó mucho el producto esta genial lo recomiendo mucho no se arrepentirán de tenerla';
  @Input() price: string = '300.000';
  @Input() priceOfert: string = '200.000';

  constructor() { }

  ngOnInit() {
  }

}
