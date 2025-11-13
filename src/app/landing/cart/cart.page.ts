import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonIcon, IonList, IonItem, IonButton, IonCard, IonCardContent, IonInput, IonLabel, IonModal, IonCardHeader, IonCardTitle, IonCardSubtitle } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { add, remove, trash, cartOutline, close } from 'ionicons/icons';
import { CartService, CartItem, CartSummary } from 'src/app/services/cart.service';
import { Subscription } from 'rxjs';
import { AlertController } from '@ionic/angular/standalone';
import { HeaderLandingPage } from 'src/app/components/header/header-landing/header-landing.page';
import { EpaycoService } from 'src/app/services/epayco';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
  standalone: true,
  imports: [IonCardSubtitle, IonCardTitle, IonCardHeader, 
    IonCardContent, IonCard, IonButton, IonItem, IonList, IonIcon, IonContent, IonHeader, IonTitle, IonToolbar,
    CommonModule, FormsModule, HeaderLandingPage, IonInput, IonLabel, IonModal
  ]
})
export class CartPage implements OnInit, OnDestroy {

  cartItems: CartItem[] = [];
  cartSummary: CartSummary = {
    totalItems: 0,
    totalPrice: 0,
    items: []
  };
  
  private cartSubscription?: Subscription;

  // 🔹 Control del formulario modal
  showFormModal = false;

  // 🔹 Datos del formulario
  formData = {
    name: '',
    email: '',
    address: '',
    postalCode: '',
    apartment: '',
    neighborhood: '',
    city: '',
    phone: ''
  };

  constructor(
    private cartService: CartService,
    private alertController: AlertController,
    private epaycoService: EpaycoService
  ) {
    addIcons({ add, remove, trash, cartOutline, close });
  }

  ngOnInit() {
    this.cartSubscription = this.cartService.cart$.subscribe(items => {
      this.cartItems = items;
      this.cartSummary = this.cartService.getCartSummary();
    });
    this.loadCart();
  }

  ngOnDestroy() {
    if (this.cartSubscription) this.cartSubscription.unsubscribe();
  }

  loadCart(): void {
    this.cartItems = this.cartService.getCartItems();
    this.cartSummary = this.cartService.getCartSummary();
  }

  increaseQuantity(item: CartItem): void {
    this.cartService.updateQuantity(item.product.id, item.selectedColor, item.quantity + 1);
  }

  decreaseQuantity(item: CartItem): void {
    if (item.quantity > 1) {
      this.cartService.updateQuantity(item.product.id, item.selectedColor, item.quantity - 1);
    }
  }

  async removeItem(item: CartItem): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Confirmar eliminación',
      message: `¿Deseas eliminar ${item.product.name} (${item.selectedColor}) del carrito?`,
      buttons: [
        { text: 'Cancelar', role: 'cancel' },
        { text: 'Eliminar', role: 'destructive', handler: () => this.cartService.removeFromCart(item.product.id, item.selectedColor) }
      ]
    });
    await alert.present();
  }

  async clearCart(): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Vaciar carrito',
      message: '¿Estás seguro de que deseas vaciar todo el carrito?',
      buttons: [
        { text: 'Cancelar', role: 'cancel' },
        { text: 'Vaciar', role: 'destructive', handler: () => this.cartService.clearCart() }
      ]
    });
    await alert.present();
  }

  /**
   * 🔹 Muestra el popup elegante con el formulario
   */
  openFormModal(): void {
    this.showFormModal = true;
  }

  /**
   * 🔹 Cierra el popup
   */
  closeFormModal(): void {
    this.showFormModal = false;
  }

  /**
   * 🔹 Procesa el formulario y redirige a ePayco
   */
  async submitCheckout(): Promise<void> {
    const f = this.formData;

    if (!f.name || !f.email || !f.address || !f.city || !f.phone) {
      const alert = await this.alertController.create({
        header: 'Campos incompletos',
        message: 'Por favor, completa todos los campos requeridos antes de continuar.',
        buttons: ['OK']
      });
      await alert.present();
      return;
    }

    const total = this.cartSummary.totalPrice;
    const iva = this.epaycoService.calcularIva(total);

    const datos = {
      name: f.name,
      description: 'Pago de productos seleccionados',
      invoice: this.epaycoService.generarNumeroFactura(),
      currency: 'COP',
      amount: iva.total,
      tax_base: iva.base,
      tax: iva.iva,
      country: 'CO',
      lang: 'es',
      external: 'true',
      response: 'https://tutienda.com/response',
      confirmation: 'https://tutienda.com/confirm',
      name_billing: f.name,
      address_billing: f.address,
      type_doc_billing: 'CC',
      number_doc_billing: '123456789',
      mobilephone_billing: f.phone
    };

    this.closeFormModal();

    setTimeout(() => {
      this.epaycoService.initCheckout(datos);
    }, 600); // pequeña animación antes de redirigir
  }
}
