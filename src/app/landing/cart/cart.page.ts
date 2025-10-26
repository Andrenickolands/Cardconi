import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonIcon, IonList, IonItem, IonButton, IonCard, IonCardContent } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { add, remove, trash, cartOutline } from 'ionicons/icons';
import { CartService, CartItem, CartSummary } from 'src/app/services/cart.service';
import { Subscription } from 'rxjs';
import { AlertController } from '@ionic/angular/standalone';
import { HeaderLandingPage } from 'src/app/components/header/header-landing/header-landing.page';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
  standalone: true,
  imports: [IonCardContent, IonCard, IonButton, IonItem, IonList, IonIcon, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderLandingPage, ]
})
export class CartPage implements OnInit, OnDestroy {

  cartItems: CartItem[] = [];
  cartSummary: CartSummary = {
    totalItems: 0,
    totalPrice: 0,
    items: []
  };
  
  private cartSubscription?: Subscription;

  constructor(
    private cartService: CartService,
    private alertController: AlertController
  ) {
    // Registrar los íconos
    addIcons({ add, remove, trash, cartOutline });
  }

  ngOnInit() {
    // Suscribirse a los cambios del carrito
    this.cartSubscription = this.cartService.cart$.subscribe(items => {
      this.cartItems = items;
      this.cartSummary = this.cartService.getCartSummary();
    });

    // Cargar datos iniciales
    this.loadCart();
  }

  ngOnDestroy() {
    // Limpiar suscripción al destruir el componente
    if (this.cartSubscription) {
      this.cartSubscription.unsubscribe();
    }
  }

  /**
   * Carga los items del carrito
   */
  loadCart(): void {
    this.cartItems = this.cartService.getCartItems();
    this.cartSummary = this.cartService.getCartSummary();
  }

  /**
   * Incrementa la cantidad de un item
   */
  increaseQuantity(item: CartItem): void {
    this.cartService.updateQuantity(
      item.product.id, 
      item.selectedColor, 
      item.quantity + 1
    );
  }

  /**
   * Decrementa la cantidad de un item
   */
  decreaseQuantity(item: CartItem): void {
    if (item.quantity > 1) {
      this.cartService.updateQuantity(
        item.product.id, 
        item.selectedColor, 
        item.quantity - 1
      );
    }
  }

  /**
   * Elimina un item del carrito con confirmación
   */
  async removeItem(item: CartItem): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Confirmar eliminación',
      message: `¿Deseas eliminar ${item.product.name} (${item.selectedColor}) del carrito?`,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Eliminar',
          role: 'destructive',
          handler: () => {
            this.cartService.removeFromCart(item.product.id, item.selectedColor);
          }
        }
      ]
    });

    await alert.present();
  }

  /**
   * Vacía todo el carrito con confirmación
   */
  async clearCart(): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Vaciar carrito',
      message: '¿Estás seguro de que deseas vaciar todo el carrito?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Vaciar',
          role: 'destructive',
          handler: () => {
            this.cartService.clearCart();
          }
        }
      ]
    });

    await alert.present();
  }

  /**
   * Procesa el pedido (aquí iría la lógica de checkout)
   */
  async checkout(): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Procesar pedido',
      message: `Total a pagar: $${this.cartSummary.totalPrice.toFixed(2)}`,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Confirmar',
          handler: () => {
            // Aquí iría la lógica para procesar el pedido
            console.log('Procesando pedido...', this.cartSummary);
            // Por ahora solo vaciar el carrito
            this.cartService.clearCart();
          }
        }
      ]
    });

    await alert.present();
  }
}
