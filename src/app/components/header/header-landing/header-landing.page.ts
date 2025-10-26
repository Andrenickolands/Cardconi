import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonTitle, IonToolbar, IonButton, IonIcon, IonItem, IonList, IonBackButton, MenuController } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { AuthService, Usuario } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header-landing',
  templateUrl: './header-landing.page.html',
  styleUrls: ['./header-landing.page.scss'],
  standalone: true,
  imports: [IonBackButton, IonList, IonItem, IonButton, IonIcon, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class HeaderLandingPage implements OnInit {

  @Input() nombreApp: string = 'Cardconi';
  @Input() ubicacion: string = 'Bogotá, Colombia';

  // Número de WhatsApp 
  phoneNumber = '573006380397'; 
  message = 'Hola, necesito ayuda'; 

  usuarioActual: Usuario | null = null;

  constructor(
    private menuController: MenuController,
    private router: Router,
    private viewportScroller: ViewportScroller,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.authService.usuario$.subscribe(usuario => {
      this.usuarioActual = usuario;
    });
  }

  getIniciales(): string {
    if (this.usuarioActual?.nombre && this.usuarioActual?.apellidos) {
      return this.usuarioActual.nombre.charAt(0).toUpperCase() +
             this.usuarioActual.apellidos.charAt(0).toUpperCase();
    }
    return '';
  }

  irAPerfil(): void {
    this.router.navigate(['/perfil']);
  }

  logout() {
    this.authService.logout();    
    this.router.navigate(['/login']); 
  }

  abrirMenu(): void {
    this.menuController.open('menu-principal');
  }

  navegarASeccion(fragmento: string) {
    if (this.router.url === '/home' || this.router.url === '/') {
      this.scrollToElement(fragmento);
    } else {
      this.router.navigate(['/home'], { fragment: fragmento }).then(() => {
        setTimeout(() => this.scrollToElement(fragmento), 100);
      });
    }
  }

  private scrollToElement(elementId: string) {
    const element = document.getElementById(elementId);
    if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  goToLogin() { this.router.navigate(['/login']); }
  goToRegister() { this.router.navigate(['/sign-up']); }

  openWhatsApp(): void {
    const encodedMessage = encodeURIComponent(this.message);
    const whatsappUrl = `https://wa.me/${this.phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  }

}
