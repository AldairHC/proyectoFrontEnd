import { Cliente } from './../../model/cliente';
import { Component } from '@angular/core';
import { ClienteService } from 'src/app/service/cliente.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-registrar-cliente',
  templateUrl: './registrar-cliente.component.html',
  styleUrls: ['./registrar-cliente.component.css']
})
export class RegistrarClienteComponent {
  cliente : Cliente = new Cliente();

  constructor(
    private clienteServicio:ClienteService,
    private router:Router
    ) { }

  ngOnInit(): void {

  }

  guardarCliente(){
    this.clienteServicio.GuardarCliente(this.cliente).subscribe(dato => {
      console.log(dato);
      this.irALaListaDeClientes();
    },error => console.log(error));
  }

  irALaListaDeClientes(){
    this.router.navigate(['/clientes']);
    swal('Cliente registrado',`El Cliente ${this.cliente.nombres} ha sido registrado con exito`,`success`);
  }

  onSubmitCliente(){
    this.guardarCliente();
  }

}
