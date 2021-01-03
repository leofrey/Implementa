
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Productos } from './../../modelo/productos';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductosService } from '../../servicios/productos.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
  providers: [ProductosService]
})
export class ProductosComponent implements OnDestroy, OnInit {
  dtOptions: DataTables.Settings = {};
  dtTrigger = new Subject();

  constructor(public servicio: ProductosService) { }

  ngOnInit(): void {



    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };
    this.getProductos();
    this.dtTrigger.next();
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  getProductos(){
    this.servicio.getAllProductos()
    .subscribe(res =>
       {this.servicio.arrProductos = res as Productos[];
    });
  }

}
