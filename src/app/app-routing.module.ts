import { DetalleVentaComponent } from './venta/detalle-venta/detalle-venta.component';
import { EditarVentaComponent } from './venta/editar-venta/editar-venta.component';
import { RegistrarVentaComponent } from './venta/registrar-venta/registrar-venta.component';
import { DetalleClienteComponent } from './cliente/detalle-cliente/detalle-cliente.component';
import { EditarClienteComponent } from './cliente/editar-cliente/editar-cliente.component';
import { RegistrarClienteComponent } from './cliente/registrar-cliente/registrar-cliente.component';
import { DetalleEmpleadoComponent } from './empleado/detalle-empleado/detalle-empleado.component';
import { EditarEmpleadoComponent } from './empleado/editar-empleado/editar-empleado.component';
import { RegistrarEmpleadoComponent } from './empleado/registrar-empleado/registrar-empleado.component';
import { VentaComponent } from './venta/venta.component';
import { ClienteComponent } from './cliente/cliente.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { DetalleCategoriaComponent } from './categoria/detalle-categoria/detalle-categoria.component';
import { EditarCategoriaComponent } from './categoria/editar-categoria/editar-categoria.component';
import { GuardarCategoriaComponent } from './categoria/guardar-categoria/guardar-categoria.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { GuardarProveedorComponent } from './proveedor/guardar-proveedor/guardar-proveedor.component';
import { DetalleProveedorComponent } from './proveedor/detalle-proveedor/detalle-proveedor.component';
import { EditarProveedorComponent } from './proveedor/editar-proveedor/editar-proveedor.component';
import { ProveedorComponent } from './proveedor/proveedor.component';
import { InicioComponent } from './inicio/inicio.component';
import { DetalleProductoComponent } from './producto/detalle-producto/detalle-producto.component';
import { EditarProductoComponent } from './producto/editar-producto/editar-producto.component';
import { RegistrarProductoComponent } from './producto/registrar-producto/registrar-producto.component';
import { ProductoComponent } from './producto/producto.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    component: InicioComponent
  },
    //listar-registrar-actualizar-detalle
  {
    path:'productos',
    component: ProductoComponent
  },

  {
    path:'productos/registrar',
    component: RegistrarProductoComponent
  },

  {
  path : 'productos/actualizar/:id',
  component : EditarProductoComponent
  },

  {
  path : 'productos/detalles/:id',
  component : DetalleProductoComponent
  },

  //listar-registrar-actualizar-detalle
  {
    path:'proveedor',
    component: ProveedorComponent
  },

  {
    path:'proveedor/registrar',
    component: GuardarProveedorComponent
  },

  {
  path : 'proveedor/actualizar/:id',
  component : EditarProveedorComponent
  },

  {
  path : 'proveedor/detalles/:id',
  component : DetalleProveedorComponent
  },

   //listar-registrar-actualizar-detalle
   {
    path:'categorias',
    component: CategoriaComponent
  },

  {
    path:'categorias/registrar',
    component: GuardarCategoriaComponent
  },

  {
  path : 'categorias/actualizar/:id',
  component : EditarCategoriaComponent
  },

  {
  path : 'categorias/detalles/:id',
  component : DetalleCategoriaComponent
  },
//listar-registrar-actualizar-detalle
{
  path:'empleados',
  component: EmpleadoComponent
},

{
  path:'empleados/registrar',
  component: RegistrarEmpleadoComponent
},

{
path : 'empleados/actualizar/:id',
component : EditarEmpleadoComponent
},

{
path : 'empleados/detalles/:id',
component : DetalleEmpleadoComponent
},
//listar-registrar-actualizar-detalle
{
  path:'clientes',
  component: ClienteComponent
},

{
  path:'clientes/registrar',
  component: RegistrarClienteComponent
},

{
path : 'clientes/actualizar/:id',
component : EditarClienteComponent
},

{
path : 'clientes/detalles/:id',
component : DetalleClienteComponent
},

//listar-registrar-actualizar-detalle
{
  path:'ventas',
  component: VentaComponent
},

{
  path:'ventas/registrar',
  component: RegistrarVentaComponent
},

{
path : 'ventas/actualizar/:id',
component : EditarVentaComponent
},

{
path : 'ventas/detalles/:id',
component : DetalleVentaComponent
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
