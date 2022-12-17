import { ProductoService } from './../../service/producto.service';
import { Producto } from './../../model/producto';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { Categoria } from 'src/app/model/categoria';
import { Proveedor } from 'src/app/model/proveedor';
import { CategoriaService } from 'src/app/service/categoria.service';
import { ProveedorService } from 'src/app/service/proveedor.service';

@Component({
  selector: 'app-registrar-producto',
  templateUrl: './registrar-producto.component.html',
  styleUrls: ['./registrar-producto.component.css']
})
export class RegistrarProductoComponent {
  producto : Producto = new Producto();
  categoria: Categoria[] = [];
  proveedor: Proveedor[] = [];
  constructor(
    private productoServicio:ProductoService,
    private categoriaService: CategoriaService,
    private proveedorService: ProveedorService,
    private router:Router
    ) { }

  ngOnInit(): void {
    this.cargarCategoria();
    this.cargarProveedor();
  }

  guardarProducto(){
    this.productoServicio.GuardarProducto(this.producto).subscribe(dato => {
      console.log(dato);
      this.irALaListaDeProductos();
    },error => console.log(error));
  }

  irALaListaDeProductos(){
    this.router.navigate(['/productos']);
    swal('Producto registrado',`El Producto ${this.producto.nombre} ha sido registrado con exito`,`success`);
  }

  onSubmitProducto(){
    this.guardarProducto();
  }

  cargarCategoria(): void {
    this.categoriaService.ListaCategoria().subscribe(
      data => {
        this.categoria = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  cargarProveedor(): void {
    this.proveedorService.ListaProveedor().subscribe(
      data => {
        this.proveedor = data;
      },
      err => {
        console.log(err);
      }
    );
  }
}
