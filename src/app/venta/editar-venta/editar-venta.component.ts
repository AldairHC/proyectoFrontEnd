import { ProductoService } from 'src/app/service/producto.service';
import { Producto } from './../../model/producto';
import { Empleado } from './../../model/empleado';
import { Cliente } from './../../model/cliente';
import { Venta } from './../../model/venta';
import { Component } from '@angular/core';
import { VentaService } from 'src/app/service/venta.service';
import { ClienteService } from 'src/app/service/cliente.service';
import { EmpleadoService } from 'src/app/service/empleado.service';
import { ActivatedRoute, Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-editar-venta',
  templateUrl: './editar-venta.component.html',
  styleUrls: ['./editar-venta.component.css']
})
export class EditarVentaComponent {
  id:number;
  venta:Venta = new Venta();
  cliente: Cliente[] = [];
  empleado: Empleado[] = [];
  producto: Producto[] = [];
  constructor(
    private ventaService:VentaService,
    private clienteService: ClienteService,
    private empleadoService: EmpleadoService,
    private productoService: ProductoService,
    private router:Router,
    private route:ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.ventaService.VentaPorId(this.id).subscribe(dato =>{
      this.venta = dato;
    },error => console.log(error));
    this.cargarCliente();
    this.cargarEmpleado();
    this.cargarProducto();
  }

  irAlaListaDeVentas(){
    this.router.navigate(['/ventas']);
    swal('Venta Actualizado',`El Venta ${this.venta.idVenta} ha sido actualizado con exito`,`success`);
  }

  onSubmitVenta(){
    this.ventaService.ActualizarVenta(this.id,this.venta).subscribe(dato => {
      this.irAlaListaDeVentas();
    },error => console.log(error));
  }

  cargarCliente(): void {
    this.clienteService.ListaCliente().subscribe(
      data => {
        this.cliente = data;
        console.log(data);
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
        console.log(data);
      },
      err => {
        console.log(err);
      }
    );
  }

  cargarProducto(): void {
    this.productoService.ListaProducto().subscribe(
      data => {
        this.producto = data;
        console.log(data);
      },
      err => {
        console.log(err);
      }
    );
  }

  compararCliente(o1:Cliente,o2:Cliente):boolean{
    if(o1 === undefined && o2 === undefined) return true;
    return o1 === null || o2 ===null ||o1 === undefined || o2 === undefined ? false: o1.idCliente ==o2.idCliente;
  }

  compararEmpleado(e1:Empleado,e2:Empleado):boolean{
    if(e1 === undefined && e2 === undefined) return true;
    return e1 === null || e2 ===null ||e1 === undefined || e2 === undefined ? false: e1.idEmpleado ==e2.idEmpleado;
  }

  compararProducto(p1:Producto,p2:Producto):boolean{
    if(p1 === undefined && p2 === undefined) return true;
    return p1 === null || p2 ===null ||p1 === undefined || p2 === undefined ? false: p1.idProducto ==p2.idProducto;
  }

}
