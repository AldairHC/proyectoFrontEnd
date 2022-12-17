import { Categoria } from './../model/categoria';
import { Component } from '@angular/core';
import { CategoriaService } from '../service/categoria.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent {
  categoria: Categoria[] = [];


  constructor(
    private categoriaService: CategoriaService,
    private router:Router
    ) { }

  ngOnInit() {
    this.cargarCategoria();
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

  actualizarCategoria(id:number){
    this.router.navigate(['categorias/actualizar',id]);
  }

  verDetallesDelCategoria(id:number){
    this.router.navigate(['categorias/detalles',id]);
  }

  eliminarCategoria(id:number){
    swal({
      title: '¿Estas seguro?',
      text: "Confirma si deseas eliminar la Categoria",
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
        this.categoriaService.ElimnarCategoria(id).subscribe(dato => {
          console.log(dato);
          this.cargarCategoria();
          swal(
            'Categoria eliminada',
            'La Categoria ha sido eliminado con exito',
            'success'
          )
        })
      }
    })
  }

}
