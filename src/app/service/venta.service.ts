import { Venta } from './../model/venta';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VentaService {

  baseUrl = 'http://localhost:8082/api/venta';

  constructor(private httpClient: HttpClient) { }

  public ListaVenta(): Observable<Venta[]> {
    return this.httpClient.get<Venta[]>(this.baseUrl);
  }

  public VentaPorId(id: number): Observable<Venta> {
    return this.httpClient.get<Venta>(this.baseUrl + `/${id}`);
  }

  GuardarVenta(venta:Venta) : Observable<Object>{
    return this.httpClient.post(this.baseUrl, venta);
  }

  public ActualizarVenta(id: number, venta: Venta): Observable<any> {
    return this.httpClient.put<any>(this.baseUrl + `/${id}`, venta);
  }

  public ElimnarVenta(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.baseUrl + `/${id}`);
  }
}
