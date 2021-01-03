
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductosComponent } from '../componentes/productos/productos.component';
import { Productos } from './../modelo/productos';
import 'rxjs';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProductosService {

  selectProducto: Productos;

  readonly URL_API = "http://localhost:3000/api/productos";

  arrProductos: Productos[];

  constructor(private http: HttpClient) {
    this.selectProducto = new Productos();
  }

  getAllProductos(){
   return this.http.get(this.URL_API);
  }

}
