import { Empleado } from './empleado';
import { Cliente } from './cliente';
import { Producto } from './producto';
export class Venta {
  idVenta: number;
  fecha: string;
  descripcion: string;
  precio: string;
  cantidad: string;
  total: string;
  producto:Producto;
  cliente:Cliente;
  empleado:Empleado;
}
