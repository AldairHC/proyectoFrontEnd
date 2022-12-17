import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Proveedor } from 'src/app/model/proveedor';
import { ProveedorService } from 'src/app/service/proveedor.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-guardar-proveedor',
  templateUrl: './guardar-proveedor.component.html',
  styleUrls: ['./guardar-proveedor.component.css']
})
export class GuardarProveedorComponent {

  proveedor : Proveedor = new Proveedor();
  constructor(private proveedorServicio:ProveedorService,private router:Router) { }

  ngOnInit(): void {
  }

  guardarProveedor(){
    this.proveedorServicio.GuardarProveedor(this.proveedor).subscribe(dato => {
      console.log(dato);
      this.irALaListaDeProveedors();
    },error => console.log(error));
  }

  irALaListaDeProveedors(){
    this.router.navigate(['/proveedor']);
    swal('Proveedor registrado',`El Proveedor ${this.proveedor.nombre} ha sido registrado con exito`,`success`);
  }

  onSubmitProveedor(){
    this.guardarProveedor();
  }
}
