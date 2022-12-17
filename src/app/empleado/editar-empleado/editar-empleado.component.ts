import { Empleado } from './../../model/empleado';
import { Component } from '@angular/core';
import { EmpleadoService } from 'src/app/service/empleado.service';
import { ActivatedRoute, Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-editar-empleado',
  templateUrl: './editar-empleado.component.html',
  styleUrls: ['./editar-empleado.component.css']
})
export class EditarEmpleadoComponent {
  id:number;
  empleado:Empleado = new Empleado();
  constructor(private empleadoService:EmpleadoService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.empleadoService.EmpleadoPorId(this.id).subscribe(dato =>{
      this.empleado = dato;
    },error => console.log(error));
  }

  irAlaListaDeEmpleados(){
    this.router.navigate(['/empleados']);
    swal('Empleado Actualizado',`El Empleado ${this.empleado.nombres} ha sido actualizado con exito`,`success`);
  }

  onSubmitEmpleado(){
    this.empleadoService.ActualizarEmpleado(this.id,this.empleado).subscribe(dato => {
      this.irAlaListaDeEmpleados();
    },error => console.log(error));
  }

}
