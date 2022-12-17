import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Empleado } from 'src/app/model/empleado';
import { EmpleadoService } from 'src/app/service/empleado.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-detalle-empleado',
  templateUrl: './detalle-empleado.component.html',
  styleUrls: ['./detalle-empleado.component.css']
})
export class DetalleEmpleadoComponent {
  id:number;
  empleado:Empleado;
  constructor(private route:ActivatedRoute,private empleadoServicio:EmpleadoService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.empleado = new Empleado();
    this.empleadoServicio.EmpleadoPorId(this.id).subscribe(dato => {
      this.empleado = dato;
      swal(`Detalles de el empleado ${this.empleado.nombres}`);
    });
  }
}
