import { Proveedor } from './proveedor';
import { Categoria } from './categoria';
export class Producto {
  idProducto: number;
  nombre: string;
  descripcion: string;
  imagen: string;
  precio: string;
  cantidad: string;
  categoria:Categoria;
  proveedor:Proveedor;

}
