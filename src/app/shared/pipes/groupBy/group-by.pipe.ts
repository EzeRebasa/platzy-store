import { Pipe, PipeTransform } from '@angular/core';
import { Product } from 'src/app/product.model';

@Pipe({
  name: 'groupBy'
})

export class GroupByPipe implements PipeTransform {

  transform(objects: object[]): any {
    // Obtengo cantidades de cada producto
    const groupProducts: any = objects.reduce( (cant, prod: Product) => {
      cant[prod.id] = (cant[prod.id] || 0 ) + 1;
      return cant;
    }, {} )
    // Filtro los repetidos
    const distinctsProducts = [...new Set(objects)];
    // Mapeo el array agregando el valor de las cantidades en cada producto
    const productsFiltered: Object[] = distinctsProducts.map( prod => {
      prod['count'] = groupProducts[prod['id']]
      return prod;
    })

    return productsFiltered;
  }

}