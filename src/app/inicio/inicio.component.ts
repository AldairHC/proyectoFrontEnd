import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from '../model/producto';
import { ProductoService } from '../service/producto.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  producto: Producto[] = [];


  constructor(
    private productoService: ProductoService,
    private router:Router
    ) { }

  ngOnInit() {
    this.cargarProducto();
  }

  cargarProducto(): void {
    this.productoService.ListaProducto().subscribe(
      data => {
        this.producto = data;
      },
      err => {
        console.log(err);
      }
    );
  }

}
