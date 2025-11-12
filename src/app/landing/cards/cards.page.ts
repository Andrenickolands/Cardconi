import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderLandingPage } from 'src/app/components/header/header-landing/header-landing.page';
import { Product } from 'src/app/services/cart.service';
import { CartService } from 'src/app/services/cart.service';
import { addIcons } from 'ionicons';
import { add, remove, cart } from 'ionicons/icons';
import { IonContent, IonHeader, IonTitle, IonCard, IonToolbar,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonButton,
  IonIcon,
  IonSelect,
  IonSelectOption,
  IonLabel,
  IonItem,
  ToastController
} from '@ionic/angular/standalone';
import { BtnPrimaryPage } from 'src/app/components/btns/btn-primary/btn-primary.page';
import { BtnSeeMorePage } from 'src/app/components/btns/btn-see-more/btn-see-more.page';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.page.html',
  styleUrls: ['./cards.page.scss'],
  standalone: true,
  imports: [IonContent, 
    IonCard,
    HeaderLandingPage,
    IonCardContent,
    IonButton,
    IonSelect,
    IonSelectOption,
    IonLabel,
    IonItem,
    CommonModule, 
    FormsModule, BtnPrimaryPage, BtnSeeMorePage]
})
export class CardsPage implements OnInit {

  // Lista de productos
  products: Product[] = [
    {
      id: '1',
      name: 'Premium Golden Card',
      description: 'Su acabado en baño de oro de alta calidad refleja tu estilo único y resalta tu estatus en cada transacción. Más que una tarjeta, es un símbolo de éxito y sofisticación, creada para quienes valoran los detalles y buscan marcar la diferencia',
      price: 1450000,
      image: '../../../../assets/media/cards/golden_card.png',
      availableColors: ['Golden', 'Plateado', 'Tornasol', 'Negro Mate'],
      stock: 50
    },
    {
      id: '2',
      name: 'Producto 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      price: 49.99,
      image: 'https://via.placeholder.com/300x200',
      availableColors: ['Blanco', 'Gris', 'Amarillo'],
      stock: 30
    },
    {
      id: '3',
      name: 'Producto 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      price: 19.99,
      image: 'https://via.placeholder.com/300x200',
      availableColors: ['Rosa', 'Morado', 'Celeste'],
      stock: 20
    }
  ];

  // Objeto para mantener la cantidad seleccionada de cada producto
  selectedQuantities: { [productId: string]: number } = {};
  
  // Objeto para mantener el color seleccionado de cada producto
  selectedColors: { [productId: string]: string } = {};

  constructor(
    private cartService: CartService,
    private toastController: ToastController,
    private router: Router
  ) {
    // Registrar los íconos de Ionic
    addIcons({ add, remove, cart });
  }

  ngOnInit() {
    // Inicializar cantidades y colores por defecto
    this.products.forEach(product => {
      this.selectedQuantities[product.id] = 1;
      this.selectedColors[product.id] = product.availableColors[0];
    });
  }

  /**
   * Incrementa la cantidad de un producto
   * @param productId - ID del producto
   */
  increaseQuantity(productId: string): void {
    const product = this.products.find(p => p.id === productId);
    if (product && this.selectedQuantities[productId] < product.stock) {
      this.selectedQuantities[productId]++;
    }
  }

  /**
   * Decrementa la cantidad de un producto
   * @param productId - ID del producto
   */
  decreaseQuantity(productId: string): void {
    if (this.selectedQuantities[productId] > 1) {
      this.selectedQuantities[productId]--;
    }
  }

  /**
   * Agrega un producto al carrito
   * @param product - Producto a agregar
   */
  async addToCart(product: Product): Promise<void> {
    const quantity = this.selectedQuantities[product.id];
    const color = this.selectedColors[product.id];

    // Validar que se haya seleccionado un color
    if (!color) {
      await this.showToast('Por favor selecciona un color', 'warning');
      return;
    }

    // Agregar al carrito usando el servicio
    this.cartService.addToCart(product, quantity, color);

    // Mostrar mensaje de confirmación
    await this.showToast(
      `${product.name} agregado al carrito (${quantity} unidad${quantity > 1 ? 'es' : ''})`,
      'success'
    );
    this.selectedQuantities[product.id] = 1;
  }

  /**
   * Muestra un mensaje toast
   * @param message - Mensaje a mostrar
   * @param color - Color del toast
   */
  private async showToast(message: string, color: string = 'primary'): Promise<void> {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: 'bottom',
      color: color
    });
    toast.present();
  }

  async goToCart(){
    this.router.navigate(['/cart']);
  }
}
