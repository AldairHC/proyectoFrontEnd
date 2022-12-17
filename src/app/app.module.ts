import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductoComponent } from './producto/producto.component';
import { RegistrarProductoComponent } from './producto/registrar-producto/registrar-producto.component';
import { DetalleProductoComponent } from './producto/detalle-producto/detalle-producto.component';
import { EditarProductoComponent } from './producto/editar-producto/editar-producto.component';
//
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InicioComponent } from './inicio/inicio.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { GuardarCategoriaComponent } from './categoria/guardar-categoria/guardar-categoria.component';
import { EditarCategoriaComponent } from './categoria/editar-categoria/editar-categoria.component';
import { DetalleCategoriaComponent } from './categoria/detalle-categoria/detalle-categoria.component';
import { ProveedorComponent } from './proveedor/proveedor.component';
import { GuardarProveedorComponent } from './proveedor/guardar-proveedor/guardar-proveedor.component';
import { EditarProveedorComponent } from './proveedor/editar-proveedor/editar-proveedor.component';
import { DetalleProveedorComponent } from './proveedor/detalle-proveedor/detalle-proveedor.component';
import { ClienteComponent } from './cliente/cliente.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { VentaComponent } from './venta/venta.component';
import { RegistrarClienteComponent } from './cliente/registrar-cliente/registrar-cliente.component';
import { EditarClienteComponent } from './cliente/editar-cliente/editar-cliente.component';
import { DetalleClienteComponent } from './cliente/detalle-cliente/detalle-cliente.component';
import { RegistrarEmpleadoComponent } from './empleado/registrar-empleado/registrar-empleado.component';
import { EditarEmpleadoComponent } from './empleado/editar-empleado/editar-empleado.component';
import { DetalleEmpleadoComponent } from './empleado/detalle-empleado/detalle-empleado.component';
import { RegistrarVentaComponent } from './venta/registrar-venta/registrar-venta.component';
import { EditarVentaComponent } from './venta/editar-venta/editar-venta.component';
import { DetalleVentaComponent } from './venta/detalle-venta/detalle-venta.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductoComponent,
    RegistrarProductoComponent,
    DetalleProductoComponent,
    EditarProductoComponent,
    InicioComponent,
    CategoriaComponent,
    GuardarCategoriaComponent,
    EditarCategoriaComponent,
    DetalleCategoriaComponent,
    ProveedorComponent,
    GuardarProveedorComponent,
    EditarProveedorComponent,
    DetalleProveedorComponent,
    ClienteComponent,
    EmpleadoComponent,
    VentaComponent,
    RegistrarClienteComponent,
    EditarClienteComponent,
    DetalleClienteComponent,
    RegistrarEmpleadoComponent,
    EditarEmpleadoComponent,
    DetalleEmpleadoComponent,
    RegistrarVentaComponent,
    EditarVentaComponent,
    DetalleVentaComponent,
    FooterComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
