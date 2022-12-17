import { Cliente } from './../model/cliente';
import { Component } from '@angular/core';
import { ClienteService } from '../service/cliente.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent {
  cliente: Cliente[] = [];


  constructor(
    private clienteService: ClienteService,
    private router:Router
    ) { }

  ngOnInit() {
    this.cargarCliente();
  }

  cargarCliente(): void {
    this.clienteService.ListaCliente().subscribe(
      data => {
        this.cliente = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  actualizarCliente(id:number){
    this.router.navigate(['clientes/actualizar',id]);
  }

  verDetallesDelCliente(id:number){
    this.router.navigate(['clientes/detalles',id]);
  }

  eliminarCliente(id:number){
    swal({
      title: '¿Estas seguro?',
      text: "Confirma si deseas eliminar el Cliente",
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
        this.clienteService.ElimnarCliente(id).subscribe(dato => {
          console.log(dato);
          this.cargarCliente();
          swal(
            'Cliente eliminado',
            'El Cliente ha sido eliminado con exito',
            'success'
          )
        })
      }
    })
  }

}
