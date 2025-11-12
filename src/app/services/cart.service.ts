import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  availableColors: string[];
  stock: number;
   imagesByColor?: { [color: string]: string };
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedColor: string;
  subtotal: number;
}

export interface CartSummary {
  totalItems: number;
  totalPrice: number;
  items: CartItem[];
}



@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: CartItem[] = [];
  private cartSubject = new BehaviorSubject<CartItem[]>(this.cartItems);
  

  public cart$: Observable<CartItem[]> = this.cartSubject.asObservable();

  constructor() {
    this.loadCartFromStorage();
  }

  // ====================================
  // MÉTODOS PÚBLICOS
  // ====================================

  /**
   * Agrega un producto al carrito
   * Si el producto ya existe con el mismo color, incrementa la cantidad
   * Si no existe, lo agrega como nuevo item
   * 
   * @param product - Producto a agregar
   * @param quantity - Cantidad de unidades
   * @param selectedColor - Color seleccionado
   */
  addToCart(product: Product, quantity: number, selectedColor: string): void {
    const existingItemIndex = this.cartItems.findIndex(
      item => item.product.id === product.id && item.selectedColor === selectedColor
    );

    if (existingItemIndex > -1) {
      this.cartItems[existingItemIndex].quantity += quantity;
      this.cartItems[existingItemIndex].subtotal = 
        this.cartItems[existingItemIndex].quantity * product.price;
    } else {
      const newItem: CartItem = {
        product: product,
        quantity: quantity,
        selectedColor: selectedColor,
        subtotal: product.price * quantity
      };
      this.cartItems.push(newItem);
    }
    this.saveCartToStorage();
    this.cartSubject.next(this.cartItems);
  }

  /**
   * Obtiene todos los items del carrito
   * @returns Array de items en el carrito
   */
  getCartItems(): CartItem[] {
    return this.cartItems;
  }

  /**
   * Actualiza la cantidad de un item específico en el carrito
   * 
   * @param productId - ID del producto
   * @param selectedColor - Color del producto
   * @param newQuantity - Nueva cantidad
   */
  updateQuantity(productId: string, selectedColor: string, newQuantity: number): void {
    const itemIndex = this.cartItems.findIndex(
      item => item.product.id === productId && item.selectedColor === selectedColor
    );

    if (itemIndex > -1) {
      if (newQuantity <= 0) {
        this.removeFromCart(productId, selectedColor);
      } else {
        this.cartItems[itemIndex].quantity = newQuantity;
        this.cartItems[itemIndex].subtotal = 
          this.cartItems[itemIndex].product.price * newQuantity;
        
        this.saveCartToStorage();
        this.cartSubject.next(this.cartItems);
      }
    }
  }

  /**
   * Elimina un item del carrito
   * 
   * @param productId - ID del producto a eliminar
   * @param selectedColor - Color del producto a eliminar
   */
  removeFromCart(productId: string, selectedColor: string): void {
    this.cartItems = this.cartItems.filter(
      item => !(item.product.id === productId && item.selectedColor === selectedColor)
    );

    this.saveCartToStorage();
    this.cartSubject.next(this.cartItems);
  }

  /**
   * Vacía completamente el carrito
   */
  clearCart(): void {
    this.cartItems = [];
    this.saveCartToStorage();
    this.cartSubject.next(this.cartItems);
  }

  /**
   * Obtiene el resumen del carrito con totales calculados
   * @returns Resumen con cantidad total de items y precio total
   */
  getCartSummary(): CartSummary {
    const totalItems = this.cartItems.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = this.cartItems.reduce((sum, item) => sum + item.subtotal, 0);

    return {
      totalItems: totalItems,
      totalPrice: totalPrice,
      items: this.cartItems
    };
  }

  /**
   * Obtiene la cantidad total de items en el carrito
   * Útil para mostrar el badge en el ícono del carrito
   * @returns Número total de items
   */
  getTotalItems(): number {
    return this.cartItems.reduce((sum, item) => sum + item.quantity, 0);
  }

  // ====================================
  // MÉTODOS PRIVADOS (Persistencia)
  // ====================================

  /**
   * Guarda el carrito en localStorage para persistencia
   */
  private saveCartToStorage(): void {
    try {
      localStorage.setItem('cart', JSON.stringify(this.cartItems));
    } catch (error) {
      console.error('Error al guardar el carrito en localStorage:', error);
    }
  }

  /**
   * Carga el carrito desde localStorage al iniciar
   */
  private loadCartFromStorage(): void {
    try {
      const savedCart = localStorage.getItem('cart');
      if (savedCart) {
        this.cartItems = JSON.parse(savedCart);
        this.cartSubject.next(this.cartItems);
      }
    } catch (error) {
      console.error('Error al cargar el carrito desde localStorage:', error);
      this.cartItems = [];
    }
  }
}