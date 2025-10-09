import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from "@angular/router";
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class SplashPage implements OnInit {
  letters: string[] = [];
  private SplashTimer: any;

  constructor(private router: Router) { }

  ngOnInit() {
    this.letters = 'CARCONI'.split('');
    //inicia el timer y redirecciona al home
    this.SplashTimer = setTimeout(() => {
      this.navigateToHome()
    }, 3000);    
  }

  ngOnDestroy() {
    if (this.SplashTimer) {
      clearTimeout(this.SplashTimer);
      console.log("Splash terminado");
    }
  }

  private navigateToHome(): void {
    //log
    console.log("Inicializando home ...");
    this.router.navigate(["/home"]),
    {
      replaceUrl: true
    }
  }

}
