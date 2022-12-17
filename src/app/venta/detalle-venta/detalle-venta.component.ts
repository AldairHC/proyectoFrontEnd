import { Venta } from './../../model/venta';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VentaService } from 'src/app/service/venta.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-detalle-venta',
  templateUrl: './detalle-venta.component.html',
  styleUrls: ['./detalle-venta.component.css']
})
export class DetalleVentaComponent {
  id:number;
  venta:Venta;
  constructor(private route:ActivatedRoute,private ventaServicio:VentaService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.venta = new Venta();
    this.ventaServicio.VentaPorId(this.id).subscribe(dato => {
      this.venta = dato;
      swal(`Detalles del venta ${this.venta.idVenta}`);
    });
  }
}
