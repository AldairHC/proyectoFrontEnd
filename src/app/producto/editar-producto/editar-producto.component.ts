import { ProductoService } from './../../service/producto.service';
import { Producto } from './../../model/producto';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import swal from 'sweetalert2';
import { Categoria } from 'src/app/model/categoria';
import { Proveedor } from 'src/app/model/proveedor';
import { CategoriaService } from 'src/app/service/categoria.service';
import { ProveedorService } from 'src/app/service/proveedor.service';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.css']
})
export class EditarProductoComponent {
  id:number;
  producto:Producto = new Producto();
  categoria: Categoria[] = [];
  proveedor: Proveedor[] = [];
  constructor(
    private productoService:ProductoService,
    private categoriaService: CategoriaService,
    private proveedorService: ProveedorService,
    private router:Router,
    private route:ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.productoService.ProductoPorId(this.id).subscribe(dato =>{
      this.producto = dato;
    },error => console.log(error));
    this.cargarCategoria();
    this.cargarProveedor();
  }

  irAlaListaDeProductos(){
    this.router.navigate(['/productos']);
    swal('Producto Actualizado',`El Producto ${this.producto.nombre} ha sido actualizado con exito`,`success`);
  }

  onSubmitProducto(){
    this.productoService.ActualizarProducto(this.id,this.producto).subscribe(dato => {
      this.irAlaListaDeProductos();
    },error => console.log(error));
  }

  cargarCategoria(): void {
    this.categoriaService.ListaCategoria().subscribe(
      data => {
        this.categoria = data;
        console.log(data);
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
        console.log(data);
      },
      err => {
        console.log(err);
      }
    );
  }

  compararCategoria(o1:Categoria,o2:Categoria):boolean{
    if(o1 === undefined && o2 === undefined) return true;
    return o1 === null || o2 ===null ||o1 === undefined || o2 === undefined ? false: o1.idCategoria ==o2.idCategoria;
  }

  compararProveedor(o1:Proveedor,p2:Proveedor):boolean{
    if(o1 === undefined && p2 === undefined) return true;
    return o1 === null || p2 ===null ||o1 === undefined || p2 === undefined ? false: o1.idProveedor ==p2.idProveedor;
  }

}
