import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Proveedor } from '../model/proveedor';
import { ProveedorService } from '../service/proveedor.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-proveedor',
  templateUrl: './proveedor.component.html',
  styleUrls: ['./proveedor.component.css']
})
export class ProveedorComponent {
  proveedor: Proveedor[] = [];


  constructor(
    private proveedorService: ProveedorService,
    private router:Router
    ) { }

  ngOnInit() {
    this.cargarProveedor();
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

  actualizarProveedor(id:number){
    this.router.navigate(['proveedor/actualizar',id]);
  }

  verDetallesDelProveedor(id:number){
    this.router.navigate(['proveedor/detalles',id]);
  }

  eliminarProveedor(id:number){
    Swal({
      title: '¿Estas seguro?',
      text: "Confirma si deseas eliminar el Proveedor",
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
        this.proveedorService.ElimnarProveedor(id).subscribe(dato => {
          console.log(dato);
          this.cargarProveedor();
          Swal(
            'Proveedor eliminado',
            'El proveedor ha sido eliminado con exito',
            'success'
          )
        })
      }
    })
  }




}
