import { Producto } from './../../model/producto';
import { Component } from '@angular/core';
import { ProductoService } from 'src/app/service/producto.service';
import { ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent {
  id:number;
  producto:Producto;
  constructor(private route:ActivatedRoute,private productoServicio:ProductoService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.producto = new Producto();
    this.productoServicio.ProductoPorId(this.id).subscribe(dato => {
      this.producto = dato;
      swal(`Detalles del producto ${this.producto.nombre}`);
    });
  }
}
