import { Empleado } from './../../model/empleado';
import { Cliente } from './../../model/cliente';
import { Producto } from './../../model/producto';
import { Venta } from './../../model/venta';
import { Component } from '@angular/core';
import { VentaService } from 'src/app/service/venta.service';
import { ProductoService } from 'src/app/service/producto.service';
import { ClienteService } from 'src/app/service/cliente.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { EmpleadoService } from 'src/app/service/empleado.service';

@Component({
  selector: 'app-registrar-venta',
  templateUrl: './registrar-venta.component.html',
  styleUrls: ['./registrar-venta.component.css']
})
export class RegistrarVentaComponent {
  venta : Venta = new Venta();
  producto: Producto[] = [];
  cliente: Cliente[] = [];
  empleado: Empleado[] = [];
  constructor(
    private ventaServicio:VentaService,
    private productoService: ProductoService,
    private clienteService: ClienteService,
    private empleadoService: EmpleadoService,
    private router:Router
    ) { }

  ngOnInit(): void {
    this.cargarProducto();
    this.cargarCliente();
    this.cargarEmpleado();
  }

  guardarVenta(){
    this.ventaServicio.GuardarVenta(this.venta).subscribe(dato => {
      console.log(dato);
      this.irALaListaDeVentas();
    },error => console.log(error));
  }

  irALaListaDeVentas(){
    this.router.navigate(['/ventas']);
    swal('Venta registrado',`El Venta ${this.venta.descripcion} ha sido registrado con exito`,`success`);
  }

  onSubmitVenta(){
    this.guardarVenta();
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

  cargarCliente(): void {
    this.clienteService.ListaCliente().subscribe(
      data => {
        this.cliente = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  cargarEmpleado(): void {
    this.empleadoService.ListaEmpleado().subscribe(
      data => {
        this.empleado = data;
      },
      err => {
        console.log(err);
      }
    );
  }

}
