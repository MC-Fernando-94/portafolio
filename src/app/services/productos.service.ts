import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos: Producto[] = [];

  constructor( private http: HttpClient) {
    this.cargarProductos();
   }

   // tslint:disable-next-line: typedef
   private cargarProductos(){

    this.http.get('https://plas-digital.firebaseio.com/productos_idx.json')
    .subscribe((resp: Producto []) => {

      console.log(resp);
      this.productos = resp;
      this.cargando = false;



    });

   }
}