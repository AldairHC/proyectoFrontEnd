import { Cliente } from './../../model/cliente';
import { Component } from '@angular/core';
import { ClienteService } from 'src/app/service/cliente.service';
import { ActivatedRoute, Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.css']
})
export class EditarClienteComponent {
  id:number;
  cliente:Cliente = new Cliente();
  constructor(private clienteService:ClienteService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.clienteService.ClientePorId(this.id).subscribe(dato =>{
      this.cliente = dato;
    },error => console.log(error));
  }

  irAlaListaDeClientes(){
    this.router.navigate(['/clientes']);
    swal('Cliente Actualizado',`El Cliente ${this.cliente.nombres} ha sido actualizado con exito`,`success`);
  }

  onSubmitCliente(){
    this.clienteService.ActualizarCliente(this.id,this.cliente).subscribe(dato => {
      this.irAlaListaDeClientes();
    },error => console.log(error));
  }

}
