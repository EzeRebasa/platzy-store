import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { ProductComponent } from './components/product/product.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductRoutingModule } from '../product/product-routing.module';
import { ProductsComponent } from './components/products/products.component';
import { MaterialModule } from '../../material/material.module';


@NgModule({
    // los componentes que va a tener este module
    declarations: [
        ProductComponent,
        ProductDetailComponent,
        ProductsComponent
    ],
    imports: [
        CommonModule,
        ProductRoutingModule,
        SharedModule,
        MaterialModule
    ]
})

export class ProductModule {

}