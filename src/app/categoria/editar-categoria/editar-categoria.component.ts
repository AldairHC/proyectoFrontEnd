import { Categoria } from './../../model/categoria';
import { Component } from '@angular/core';
import { CategoriaService } from 'src/app/service/categoria.service';
import { ActivatedRoute, Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-editar-categoria',
  templateUrl: './editar-categoria.component.html',
  styleUrls: ['./editar-categoria.component.css']
})
export class EditarCategoriaComponent {
  id:number;
  categoria:Categoria = new Categoria();
  constructor(private categoriaService:CategoriaService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.categoriaService.CategoriaPorId(this.id).subscribe(dato =>{
      this.categoria = dato;
    },error => console.log(error));
  }

  irAlaListaDeCategorias(){
    this.router.navigate(['/categorias']);
    swal('Categoria Actualizada',`La Categoria ${this.categoria.nombre} ha sido actualizado con exito`,`success`);
  }

  onSubmitCategoria(){
    this.categoriaService.ActualizarCategoria(this.id,this.categoria).subscribe(dato => {
      this.irAlaListaDeCategorias();
    },error => console.log(error));
  }

}
