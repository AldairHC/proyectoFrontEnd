import { Empleado } from './../model/empleado';
import { Component } from '@angular/core';
import { EmpleadoService } from '../service/empleado.service';
import swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent {
  empleado: Empleado[] = [];


  constructor(
    private empleadoService: EmpleadoService,
    private router:Router
    ) { }

  ngOnInit() {
    this.cargarEmpleado();
  }

  cargarEmpleado(): void {
    this.empleadoService.ListaEmpleado().subscribe(
      data => {
        this.empleado = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  actualizarEmpleado(id:number){
    this.router.navigate(['empleados/actualizar',id]);
  }

  verDetallesDelEmpleado(id:number){
    this.router.navigate(['empleados/detalles',id]);
  }

  eliminarEmpleado(id:number){
    swal({
      title: '¿Estas seguro?',
      text: "Confirma si deseas eliminar el Empleado",
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
        this.empleadoService.ElimnarEmpleado(id).subscribe(dato => {
          console.log(dato);
          this.cargarEmpleado();
          swal(
            'Empleado eliminado',
            'El Empleado ha sido eliminado con exito',
            'success'
          )
        })
      }
    })
  }
}
