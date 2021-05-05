import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  // Como mi archivo html tiene una sola linea, en lugar de llamar todo el archivo
  // puedo pasar directamente
  // template: '<router-outlet></router-outlet>' y renderizaría lo mismo
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
}
