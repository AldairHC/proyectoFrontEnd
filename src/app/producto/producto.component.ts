import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Producto } from '../model/producto';
import { ProductoService } from '../service/producto.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent {
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

  actualizarProducto(id:number){
    this.router.navigate(['productos/actualizar',id]);
  }

  verDetallesDelProducto(id:number){
    this.router.navigate(['productos/detalles',id]);
  }

  eliminarProducto(id:number){
    Swal({
      title: '¿Estas seguro?',
      text: "Confirma si deseas eliminar el Producto",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si , elimínalo',
      cancelButtonText: 'No, cancelar',
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: true
    }).then((result) => {
      if(result.value){
        this.productoService.ElimnarProducto(id).subscribe(dato => {
          console.log(dato);
          this.cargarProducto();
          Swal(
            'Producto eliminado',
            'El Producto ha sido eliminado con exito',
            'success'
          )
        })
      }
    })
  }

}


