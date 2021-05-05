import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from 'src/app/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private products: Product[] = []
  private cart = new BehaviorSubject<Product[]>([]); // Instancia tipo de canal de escucha

  cart$ = this.cart.asObservable(); // Apertura de emisora para que los demás escuchen

  constructor() { }

  addToCart(product: Product) {
    this.products = [...this.products, product];
    this.cart.next(this.products) // Notifico a todos los componentes suscriptos que algo se agregó al carrito
  }

}
