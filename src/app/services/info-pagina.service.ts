import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InterfaPAgina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InterfaPAgina = {};
  cargada = false;

  constructor( private http: HttpClient) {

   // console.log('servicio de pagina listo');

    // leer el archivo JSOn

    this.http.get('assets/data/data-pagina.json')
    // tslint:disable-next-line: deprecation
    .subscribe( (resp: InterfaPAgina ) => {

      this.cargada = true;
      this.info = resp;

      console.log(resp);

    });
  }
}
