import { Empleado } from './../../model/empleado';
import { Component } from '@angular/core';
import { EmpleadoService } from 'src/app/service/empleado.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-registrar-empleado',
  templateUrl: './registrar-empleado.component.html',
  styleUrls: ['./registrar-empleado.component.css']
})
export class RegistrarEmpleadoComponent {
  empleado : Empleado = new Empleado();

  constructor(
    private empleadoServicio:EmpleadoService,
    private router:Router
    ) { }

  ngOnInit(): void {

  }

  guardarEmpleado(){
    this.empleadoServicio.GuardarEmpleado(this.empleado).subscribe(dato => {
      console.log(dato);
      this.irALaListaDeEmpleados();
    },error => console.log(error));
  }

  irALaListaDeEmpleados(){
    this.router.navigate(['/empleados']);
    swal('Empleado registrado',`El Empleado ${this.empleado.nombres} ha sido registrado con exito`,`success`);
  }

  onSubmitEmpleado(){
    this.guardarEmpleado();
  }
}
