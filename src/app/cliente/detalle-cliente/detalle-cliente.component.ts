import { Cliente } from './../../model/cliente';
import { Component } from '@angular/core';
import { ClienteService } from 'src/app/service/cliente.service';
import { ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-detalle-cliente',
  templateUrl: './detalle-cliente.component.html',
  styleUrls: ['./detalle-cliente.component.css']
})
export class DetalleClienteComponent {
  id:number;
  cliente:Cliente;
  constructor(private route:ActivatedRoute,private clienteServicio:ClienteService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.cliente = new Cliente();
    this.clienteServicio.ClientePorId(this.id).subscribe(dato => {
      this.cliente = dato;
      swal(`Detalles de el cliente ${this.cliente.nombres}`);
    });
  }
}
