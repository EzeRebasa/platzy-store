import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/core/services/cart.service';
import { map } from 'rxjs/operators'
import { Observable } from 'rxjs';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  total$: Observable<number>;

  constructor(
    private cartService: CartService
    ) {
      this.total$ = this.cartService.cart$ // Nos suscribimos desde el template
      // Queremos transformar el valor que nos llega con el pipe
      .pipe(
        map(products => products.length) // transformo la lista por el valor de la lista
      )
      // Acá modificamos la subscripción por un observable
      // .subscribe(total => {
      //   this.total = total; // Variable que usamos en el badge
      // }) // Hacemos la escucha del carrito
  }

  ngOnInit() {
  }

}
