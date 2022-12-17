import { Categoria } from './../../model/categoria';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriaService } from 'src/app/service/categoria.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-detalle-categoria',
  templateUrl: './detalle-categoria.component.html',
  styleUrls: ['./detalle-categoria.component.css']
})
export class DetalleCategoriaComponent {
  id:number;
  categoria:Categoria;
  constructor(private route:ActivatedRoute,private categoriaServicio:CategoriaService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.categoria = new Categoria();
    this.categoriaServicio.CategoriaPorId(this.id).subscribe(dato => {
      this.categoria = dato;
      swal(`Detalles de la categoria ${this.categoria.nombre}`);
    });
  }
}
