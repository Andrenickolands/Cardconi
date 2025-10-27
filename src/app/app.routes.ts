import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'splash',
    pathMatch: 'full',
  },
  {
    path: 'splash',
    loadComponent: () => import('./landing/splash/splash.page').then( m => m.SplashPage)
  },
  {
    path: 'home',
    loadComponent: () => import('./landing/home/home.page').then( m => m.HomePage)
  },
  {
    path: 'login',
    loadComponent: () => import('./landing/login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'profile',
    loadComponent: () => import('./landing/profile/profile.page').then( m => m.ProfilePage)
  },
  {
    path: 'about-us',
    loadComponent: () => import('./landing/about-us/about-us.page').then( m => m.AboutUsPage)
  },
  {
    path: 'cards',
    loadComponent: () => import('./landing/cards/cards.page').then( m => m.CardsPage)
  },
  {
    path: 'cart',
    loadComponent: () => import('./landing/cart/cart.page').then( m => m.CartPage)
  },
  {
    path: 'privacy-policy',
    loadComponent: () => import('./landing/privacy-policy/privacy-policy.page').then( m => m.PrivacyPolicyPage)
  },
  {
    path: 'sign-up',
    loadComponent: () => import('./landing/sign-up/sign-up.page').then( m => m.SignUpPage)
  },
  {
    path: 'terms-and-conditions',
    loadComponent: () => import('./landing/terms-and-conditions/terms-and-conditions.page').then( m => m.TermsAndConditionsPage)
  },
  {
    path: 'customers',
    loadComponent: () => import('./dashboard/customers/customers.page').then( m => m.CustomersPage)
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard/dashboard.page').then( m => m.DashboardPage)
  },
  {
    path: 'inventary',
    loadComponent: () => import('./dashboard/inventary/inventary.page').then( m => m.InventaryPage)
  },
  {
    path: 'orders',
    loadComponent: () => import('./dashboard/orders/orders.page').then( m => m.OrdersPage)
  },
  {
    path: 'sales',
    loadComponent: () => import('./dashboard/sales/sales.page').then( m => m.SalesPage)
  },
  {
    path: '404',
    loadComponent: () => import('./error-pages/404/404.page').then( m => m.Page404)
  },
  {
    path: '403',
    loadComponent: () => import('./error-pages/403/403.page').then( m => m.Page403)
  },
  {
    path: '500',
    loadComponent: () => import('./error-pages/500/500.page').then( m => m.Page500)
  },
  {
    path: '503',
    loadComponent: () => import('./error-pages/503/503.page').then( m => m.Page503)
  },
  {
    path: 'expirate-sesion',
    loadComponent: () => import('./error-pages/expirate-sesion/expirate-sesion.page').then( m => m.ExpirateSesionPage)
  },
  {
    path: '**',
    redirectTo: '/404'
  },
  {
    path: 'btn-see-more',
    loadComponent: () => import('./components/btns/btn-see-more/btn-see-more.page').then( m => m.BtnSeeMorePage)
  },
];
