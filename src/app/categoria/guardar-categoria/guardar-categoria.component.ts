import { Categoria } from './../../model/categoria';
import { Component } from '@angular/core';
import swal from 'sweetalert2';
import { CategoriaService } from 'src/app/service/categoria.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-guardar-categoria',
  templateUrl: './guardar-categoria.component.html',
  styleUrls: ['./guardar-categoria.component.css']
})
export class GuardarCategoriaComponent {
  categoria : Categoria = new Categoria();

  constructor(
    private categoriaServicio:CategoriaService,
    private router:Router
    ) { }

  ngOnInit(): void {

  }

  guardarCategoria(){
    this.categoriaServicio.GuardarCategoria(this.categoria).subscribe(dato => {
      console.log(dato);
      this.irALaListaDeCategorias();
    },error => console.log(error));
  }

  irALaListaDeCategorias(){
    this.router.navigate(['/categorias']);
    swal('Categoria registrada',`La Categoria ${this.categoria.nombre} ha sido registrado con exito`,`success`);
  }

  onSubmitCategoria(){
    this.guardarCategoria();
  }


}
