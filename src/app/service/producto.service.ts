import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../model/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  baseUrl = 'http://localhost:8082/api/productos';


  constructor(private httpClient: HttpClient) { }

  public ListaProducto(): Observable<Producto[]> {
    return this.httpClient.get<Producto[]>(this.baseUrl);
  }

  public ProductoPorId(id: number): Observable<Producto> {
    return this.httpClient.get<Producto>(this.baseUrl + `/${id}`);
  }

  GuardarProducto(producto:Producto) : Observable<Object>{
    return this.httpClient.post(this.baseUrl, producto);
  }

  public ActualizarProducto(id: number, producto: Producto): Observable<any> {
    return this.httpClient.put<any>(this.baseUrl + `/${id}`, producto);
  }

  public ElimnarProducto(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.baseUrl + `/${id}`);
  }

}
