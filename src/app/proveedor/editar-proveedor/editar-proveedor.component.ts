import { Proveedor } from 'src/app/model/proveedor';
import { Component } from '@angular/core';
import { ProveedorService } from 'src/app/service/proveedor.service';
import { ActivatedRoute, Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-editar-proveedor',
  templateUrl: './editar-proveedor.component.html',
  styleUrls: ['./editar-proveedor.component.css']
})
export class EditarProveedorComponent {
  id:number;
  proveedor:Proveedor = new Proveedor();
  constructor(private proveedorService:ProveedorService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.proveedorService.ProveedorPorId(this.id).subscribe(dato =>{
      this.proveedor = dato;
    },error => console.log(error));
  }

  irAlaListaDeProveedors(){
    this.router.navigate(['/proveedor']);
    swal('Proveedor Actualizado',`El Proveedor ${this.proveedor.nombre} ha sido actualizado con exito`,`success`);
  }

  onSubmitProveedor(){
    this.proveedorService.ActualizarProveedor(this.id,this.proveedor).subscribe(dato => {
      this.irAlaListaDeProveedors();
    },error => console.log(error));
  }

}
