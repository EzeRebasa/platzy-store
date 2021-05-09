import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';

import { AdminGuard } from './admin.guard';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadChildren: () => import('./components/home/home.module').then( mod => mod.HomeModule )
      },
      {
        path: 'products',
        loadChildren: ()=> import('./components/product/product.module').then( mod => mod.ProductModule)
      },
      {
        path: 'contact',
        loadChildren: ()=> import('./components/contact/contact.module').then( mod => mod.ContactModule)
      },
      {
        path: 'demo',

        loadChildren: ()=> import('./demo/demo.module').then( mod => mod.DemoModule)
      },
      {
        path: 'order',
        loadChildren: ()=> import('./order/order.module').then( mod => mod.OrderModule)
      },
    ]
  },
  {
    path: 'admin',
    canActivate: [AdminGuard],
    loadChildren: () => import('./admin/admin.module').then( mod => mod.AdminModule )
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( mod => mod.AuthModule )
  },
  {
    path: '**',
    loadChildren: () => import('./page-not-found/page-not-found.module').then(m => m.PageNotFoundModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
