import { Injectable } from '@angular/core';

Injectable({
  providedIn: 'root'
})
export interface DatosCheckout {
  name: string;
  description: string;
  invoice: string;
  currency: string;
  amount: number;
  tax_base: number;
  tax: number;
  country: string;
  lang: string;
  external: string;
  extra1?: string;
  extra2?: string;
  extra3?: string;
  response: string;
  confirmation: string;
  name_billing: string;
  address_billing: string;
  type_doc_billing: string;
  number_doc_billing: string;
  mobilephone_billing: string;
}

@Injectable({
  providedIn: 'root'
})
export class EpaycoService {
  //===== crenciales de ePayco =====//
  //para pruebas --> credencisales de prueba
  //credenciales reales

  private P_KEY = '845c29f1865d1e59917449b7e724cb68';
  private TEST_MODE = true; // Cambiar a false para modo producción a false

  //URL CHECKOUT EPAYCO
  private CHECKOUT_URL = 'https://checkout.epayco.co/checkout.js';
  constructor() { }

  // INICIALIZAR CHECKOUT DE EPAYCO
  initCheckout(datos: DatosCheckout) {
    if (!(window as any).epayco) {
      this.cargarScriptEpayco().then(() => {
        this.abrirCheckout(datos);
      }).catch((error) => {
        console.error('Error al cargar el script de ePayco:', error);
      });
    } else {
      this.abrirCheckout(datos)
    }
  }
  // CARGAR SCRIPT DE EPAYCO
  private cargarScriptEpayco(): Promise<void> {
    return new Promise((resolve, reject) => {
      // Verificar si el script ya está cargado
      const existingScript = document.querySelector(`script[src="${this.CHECKOUT_URL}"]`);
      if (existingScript) {
        resolve();
        return;
      }
      const script = document.createElement('script');
      script.src = this.CHECKOUT_URL;
      script.type = 'text/javascript';
      script.onload = () => {
        console.log('Script de ePayco cargado correctamente.');
        resolve();
      };
      script.onerror = (error) => {
        console.error('Error al cargar el script de ePayco:', error);
        reject(new Error('Error al cargar el script de ePayco'));
      };
      document.body.appendChild(script);
    });


  }
  // ABRIR CHECKOUT DE EPAYCO
  private abrirCheckout(datos: DatosCheckout) {
    try{
    console.log('Abriendo checkout de ePayco con P_KEY:', this.P_KEY);
    console.log('MODO TEST', this.TEST_MODE);

    const handler = (window as any).ePayco.checkout.configure({
      key: this.P_KEY,
      test: this.TEST_MODE});

      handler.open(datos);
      console.log('Checkout de ePayco abierto con los siguientes datos:', datos);
    }
    catch(error){
      console.error('Error al abrir el checkout de ePayco:', error);
    }  
  }

  // generar numero de factura aleatorio
  generarNumeroFactura(): string {
    const timestamp = Date.now().toString();
    const random = Math.floor(Math.random() * 1000);
    return `FACT-${timestamp}-${random}`;
  }

  //CALCULAR IVA
  calcularIva(subtotal: number):{
    base: number;
    iva: number;
    total: number
  }{
    const ivaRate = 0.19; // 19% de IVA
    const base = subtotal / (1 + ivaRate);
    const iva = subtotal - base;

    return {
      base:Math.round(base*100)/100,
      iva:Math.round(iva*100)/100,
      total:Math.round(subtotal)
    }
  }

  isTestMode(): boolean {
    return this.TEST_MODE;
  }

  setTestMode(testMode: boolean){
    this.TEST_MODE = testMode;
    console.log('Modo test actualizado a:', this.TEST_MODE);
  }

}
