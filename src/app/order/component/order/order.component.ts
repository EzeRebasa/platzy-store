import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { CartService } from 'src/app/core/services/cart.service';
import { Product } from 'src/app/product.model';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  products$: Observable<Product[]>; 
  
  constructor(
    private cartService: CartService
  ) { 
    this.products$ = this.cartService.cart$

    console.log('Products en Constructor', this.products$);
  }

  ngOnInit() {
    console.log('Products en OnInit', this.products$);
  }

  increaseProduct(id) {

  }

  decreaseProduct(id) {
    
  }


}
