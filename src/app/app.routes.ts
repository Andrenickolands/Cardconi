import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
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
    path: 'sign-up',
    loadComponent: () => import('./landing/sign-up/sign-up.page').then( m => m.SignUpPage)
  },
  {
    path: 'cart',
    loadComponent: () => import('./landing/cart/cart.page').then( m => m.CartPage)
  },
  {
    path: 'profile',
    loadComponent: () => import('./landing/profile/profile.page').then( m => m.ProfilePage)
  },
  {
    path: 'cards',
    loadComponent: () => import('./landing/cards/cards.page').then( m => m.CardsPage)
  },
  {
    path: 'about',
    loadComponent: () => import('./landing/about/about.page').then( m => m.AboutPage)
  },
  {
    path: 'about-us',
    loadComponent: () => import('./landing/about-us/about-us.page').then( m => m.AboutUsPage)
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard/dashboard.page').then( m => m.DashboardPage)
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
    path: 'customers',
    loadComponent: () => import('./dashboard/customers/customers.page').then( m => m.CustomersPage)
  },
  {
    path: 'inventary',
    loadComponent: () => import('./dashboard/inventary/inventary.page').then( m => m.InventaryPage)
  },
  {
    path: 'create-product',
    loadComponent: () => import('./dashboard/inventary/create-product/create-product.page').then( m => m.CreateProductPage)
  },
  {
    path: '404',
    loadComponent: () => import('./error-pages/404/404.page').then( m => m.404Page)
  },
  {
    path: '403',
    loadComponent: () => import('./error-pages/403/403.page').then( m => m.403Page)
  },
  {
    path: '500',
    loadComponent: () => import('./error-pages/500/500.page').then( m => m.500Page)
  },
  {
    path: '503',
    loadComponent: () => import('./error-pages/503/503.page').then( m => m.503Page)
  },
  {
    path: 'expirate-sesion',
    loadComponent: () => import('./error-pages/expirate-sesion/expirate-sesion.page').then( m => m.ExpirateSesionPage)
  },
  {
    path: 'headers',
    loadComponent: () => import('./components/headers/headers.page').then( m => m.HeadersPage)
  },
  {
    path: 'footers',
    loadComponent: () => import('./components/footers/footers.page').then( m => m.FootersPage)
  },
  {
    path: 'terms-and-conditions',
    loadComponent: () => import('./landing/terms-and-conditions/terms-and-conditions.page').then( m => m.TermsAndConditionsPage)
  },
  {
    path: 'privacy-policy',
    loadComponent: () => import('./landing/privacy-policy/privacy-policy.page').then( m => m.PrivacyPolicyPage)
  },
  {
    path: 'btn-primary',
    loadComponent: () => import('./components/btns/btn-primary/btn-primary.page').then( m => m.BtnPrimaryPage)
  },
  {
    path: 'btn-secundary',
    loadComponent: () => import('./components/btns/btn-secundary/btn-secundary.page').then( m => m.BtnSecundaryPage)
  },
  {
    path: 'btn-terciary',
    loadComponent: () => import('./components/btns/btn-terciary/btn-terciary.page').then( m => m.BtnTerciaryPage)
  },
  {
    path: 'btn-plus',
    loadComponent: () => import('./components/btns/btn-plus/btn-plus.page').then( m => m.BtnPlusPage)
  },
  {
    path: 'btn-cta',
    loadComponent: () => import('./components/btns/btn-cta/btn-cta.page').then( m => m.BtnCtaPage)
  },
  {
    path: 'btn-floating',
    loadComponent: () => import('./components/btns/btn-floating/btn-floating.page').then( m => m.BtnFloatingPage)
  },
  {
    path: 'review-card',
    loadComponent: () => import('./components/cards/review-card/review-card.page').then( m => m.ReviewCardPage)
  },
  {
    path: 'product-card',
    loadComponent: () => import('./components/cards/product-card/product-card.page').then( m => m.ProductCardPage)
  },
  {
    path: 'input',
    loadComponent: () => import('./components/inputs/input/input.page').then( m => m.InputPage)
  },
  {
    path: 'btn-secundary-login',
    loadComponent: () => import('./components/btns/btn-secundary-login/btn-secundary-login.page').then( m => m.BtnSecundaryLoginPage)
  },
  {
    path: 'input-date',
    loadComponent: () => import('./components/inputs/input-date/input-date.page').then( m => m.InputDatePage)
  },
  {
    path: 'input-dropdown',
    loadComponent: () => import('./components/inputs/input-dropdown/input-dropdown.page').then( m => m.InputDropdownPage)
  },
  {
    path: 'input-tel',
    loadComponent: () => import('./components/inputs/input-tel/input-tel.page').then( m => m.InputTelPage)
  },
  {
    path: 'input-email',
    loadComponent: () => import('./components/inputs/input-email/input-email.page').then( m => m.InputEmailPage)
  },
  {
    path: 'input-checkbox',
    loadComponent: () => import('./components/inputs/input-checkbox/input-checkbox.page').then( m => m.InputCheckboxPage)
  },
  {
    path: 'header-landing',
    loadComponent: () => import('./components/headers/header-landing/header-landing.page').then( m => m.HeaderLandingPage)
  },
  {
    path: 'footer-landing',
    loadComponent: () => import('./components/footers/footer-landing/footer-landing.page').then( m => m.FooterLandingPage)
  },
  {
    path: 'btn-primary-login',
    loadComponent: () => import('./components/btns/btn-primary-login/btn-primary-login.page').then( m => m.BtnPrimaryLoginPage)
  },
  {
    path: 'btn-cart',
    loadComponent: () => import('./components/btns/btn-cart/btn-cart.page').then( m => m.BtnCartPage)
  },
];
