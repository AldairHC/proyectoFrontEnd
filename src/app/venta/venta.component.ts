import { Venta } from './../model/venta';
import { Component } from '@angular/core';
import { VentaService } from '../service/venta.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-venta',
  templateUrl: './venta.component.html',
  styleUrls: ['./venta.component.css']
})
export class VentaComponent {
  venta: Venta[] = [];


  constructor(
    private ventaService: VentaService,
    private router:Router
    ) { }

  ngOnInit() {
    this.cargarVenta();
  }

  cargarVenta(): void {
    this.ventaService.ListaVenta().subscribe(
      data => {
        this.venta = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  actualizarVenta(id:number){
    this.router.navigate(['ventas/actualizar',id]);
  }

  verDetallesDelVenta(id:number){
    this.router.navigate(['ventas/detalles',id]);
  }

  eliminarVenta(id:number){
    swal({
      title: '¿Estas seguro?',
      text: "Confirma si deseas eliminar la Venta",
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
        this.ventaService.ElimnarVenta(id).subscribe(dato => {
          console.log(dato);
          this.cargarVenta();
          swal(
            'Venta eliminada',
            'La Venta ha sido eliminado con exito',
            'success'
          )
        })
      }
    })
  }

}
