import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-btn-floating',
  templateUrl: './btn-floating.page.html',
  styleUrls: ['./btn-floating.page.scss'],
  standalone: true,
  imports: [IonButton, CommonModule, FormsModule]
})
export class BtnFloatingPage implements OnInit, OnDestroy {

  @Input() text: string = 'Hola, un gusto atenderte';

  showMessage = false;
  private messageTimeout: any;
  private initialMessageTimeout: any;
  private hideMessageTimeout: any;

  // Número de WhatsApp 
  phoneNumber = '573006380397'; 
  message = 'Hola, necesito ayuda'; 

  // Configuración del mensaje inicial
  initialMessageDelay = 3000; // 3 segundos de retraso
  initialMessageDuration = 5000; // 5 segundos que permanece visible 

  constructor() { }

  ngOnInit() {
    // Mostrar mensaje inicial después de X segundos
    this.initialMessageTimeout = setTimeout(() => {
      this.showMessage = true;
      
      // Ocultar mensaje automáticamente después de X segundos
      this.hideMessageTimeout = setTimeout(() => {
        this.showMessage = false;
      }, this.initialMessageDuration);
    }, this.initialMessageDelay);
  }

  onButtonMouseEnter(): void {
    this.clearMessageTimeout();
    this.showMessage = true;
  }

  onButtonMouseLeave(): void {
    this.messageTimeout = setTimeout(() => {
      this.showMessage = false;
    }, 300);
  }

  onTextMouseEnter(): void {
    this.clearMessageTimeout();
  }

  onTextMouseLeave(): void {
    this.messageTimeout = setTimeout(() => {
      this.showMessage = false;
    }, 300);
  }

  openWhatsApp(): void {
    const encodedMessage = encodeURIComponent(this.message);
    const whatsappUrl = `https://wa.me/${this.phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  }

  private clearMessageTimeout(): void {
    if (this.messageTimeout) {
      clearTimeout(this.messageTimeout);
    }
    if (this.hideMessageTimeout) {
      clearTimeout(this.hideMessageTimeout);
    }
  }

  ngOnDestroy(): void {
    // Limpiar todos los timeouts
    if (this.messageTimeout) {
      clearTimeout(this.messageTimeout);
    }
    if (this.initialMessageTimeout) {
      clearTimeout(this.initialMessageTimeout);
    }
    if (this.hideMessageTimeout) {
      clearTimeout(this.hideMessageTimeout);
    }
  }

}