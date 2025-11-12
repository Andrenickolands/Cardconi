import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule],
})
export class ProductDetailPage implements OnInit {

  product!: {
    name: string;
    description: string;
    materials: string;
    price: string;
    copy: string;
    terms: string;
  };

  selectedColor: string = '';
  selectedImage: string = '';

  colorOptions = [
    {
      name: 'Golden',
      color: 'warning',
      image: '../../../../assets/media/cards/golden_card_bg.png',
      thumb: '../../../../assets/media/cards/golden.png',
    },
    {
      name: 'Silver',
      color: 'medium',
      image: '../../../../assets/media/cards/silver_card.png',
      thumb: '../../../../assets/media/cards/silver.png',
    },
    {
      name: 'Tornasol',
      color: 'tertiary',
      image: '../../../../assets/media/cards/tornasol_card.png',
      thumb: '../../../../assets/media/cards/torna.png',
    },
    {
      name: 'Black mate',
      color: 'dark',
      image: '../../../../assets/media/cards/mate_black_card.png',
      thumb: '../../../../assets/media/cards/black.png',
    },
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Simulamos producto recibido (luego puedes reemplazar con datos reales o params)
    this.product = {
      name: 'Tarjeta Golden',
      copy: 'Diseñada para quienes entienden que el verdadero lujo está en los detalles. Con beneficios exclusivos, atención preferencial y una presencia que impone, esta tarjeta no solo abre puertas… las eleva al siguiente nivel.',
      description:
        'Nuestra exclusiva tarjeta Golden ofrece acceso a experiencias únicas y beneficios premium.',
      price: '$ 145000',
      materials: 'Plástico laminado con detalles metálicos en oro.',
      terms:
        'Válida por un año. No transferible. Sujeto a términos y condiciones.',
    };

    // Valores iniciales
    this.selectedColor = 'warning';
    this.selectedImage = '../../../../assets/media/cards/golden_card_bg.png';
  }

  // ✅ Esta es la función correcta (no un arreglo)
  changeColor(option: any) {
    this.selectedColor = option.color;
    this.selectedImage = option.image;
    this.product.name = `Tarjeta ${option.name}`;
  }

  getIonicColor(color: string): string {
    return `var(--ion-color-${color})`;
  }
}
