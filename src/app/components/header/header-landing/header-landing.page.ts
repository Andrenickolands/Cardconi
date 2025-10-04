import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonTitle, IonToolbar, MenuController, IonIcon, IonButton, IonLabel, IonItem, IonList, IonBackButton } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-header-landing',
  templateUrl: './header-landing.page.html',
  styleUrls: ['./header-landing.page.scss'],
  standalone: true,
  imports: [IonBackButton, IonList, IonItem, IonLabel, IonButton, IonIcon, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class HeaderLandingPage implements OnInit {

  // Propiedades configurables desde el componente padre
  @Input() nombreApp: string = 'Cardconi';           // ← Nombre de la aplicación
  @Input() ubicacion: string = 'Bogotá, Colombia';        // ← Ubicación actual
  @Input() mostrarPerfil: boolean = true;                 // ← Mostrar botón de perfil

  // Datos del usuario logueado (se obtienen del localStorage)
  usuarioActual: any = null;

  constructor(
    private menuController: MenuController,      // ← Para controlar el menú lateral
    private router: Router,
    private viewportScroller: ViewportScroller                      // ← Para navegación entre páginas
  ) {
    // Al inicializar el componente, obtenemos los datos del usuario logueado
    this.cargarUsuarioActual();
  }

  ngOnInit() {
  }


  /**
   * Carga los datos del usuario actual desde localStorage
   * Este método se ejecuta al inicializar el componente
   */
  private cargarUsuarioActual(): void {
    try {
      // Obtenemos el usuario guardado en localStorage durante el login
      const usuarioGuardado = localStorage.getItem('usuarioActual');

      if (usuarioGuardado) {
        // Si existe, lo parseamos de JSON a objeto
        this.usuarioActual = JSON.parse(usuarioGuardado);
        console.log('Usuario cargado:', this.usuarioActual);
      } else {
        console.log('No hay usuario logueado');
      }
    } catch (error) {
      console.error('Error al cargar usuario:', error);
    }
  }

  /**
   * Abre el menú lateral en dispositivos móviles
   * Se ejecuta cuando el usuario hace clic en el botón hamburguesa
   */
  abrirMenu(): void {
    console.log('Abriendo menú lateral...');
    this.menuController.open('menu-principal');  // ← 'menu-principal' es el ID del menú
  }

  /**
   * Navega a la página de perfil del usuario
   * Se ejecuta cuando el usuario hace clic en el botón de perfil
   */
  irAPerfil(): void {
    console.log('Navegando al perfil...');
    this.router.navigate(['/perfil']);           // ← Ruta de la página de perfil
  }

  /**
   * Obtiene el nombre completo del usuario para mostrar en el header
   * Combina nombres y apellidos del usuario logueado
   */
  getNombreCompleto(): string {
    if (this.usuarioActual) {
      // Si el usuario está logueado, retornamos nombres + apellidos
      return `${this.usuarioActual.nombres} ${this.usuarioActual.apellidos}`;
    }
    return 'Usuario';  // ← Valor por defecto si no hay usuario
  }

  /**
   * Obtiene las iniciales del usuario para mostrar en el avatar
   * Toma la primera letra del nombre y apellido
   */
  getIniciales(): string {
    if (this.usuarioActual && this.usuarioActual.nombres && this.usuarioActual.apellidos) {
      // Primera letra del nombre + primera letra del apellido
      const inicialNombre = this.usuarioActual.nombres.charAt(0).toUpperCase();
      const inicialApellido = this.usuarioActual.apellidos.charAt(0).toUpperCase();
      return inicialNombre + inicialApellido;
    }
    return 'US';  // ← Valor por defecto
  }

  navegarASeccion(fragmento: string) {
    // Si ya estás en home, solo hace scroll
    if (this.router.url === '/home' || this.router.url === '/') {
      this.scrollToElement(fragmento);
    } else {
      // Si estás en otra página, navega a home y luego hace scroll
      this.router.navigate(['/home'], { fragment: fragmento }).then(() => {
        setTimeout(() => {
          this.scrollToElement(fragmento);
        }, 100);
      });
    }
  }

  private scrollToElement(elementId: string) {
    const element = document.getElementById(elementId);
    if (element) {

      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

}
