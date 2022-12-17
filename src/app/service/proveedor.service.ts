import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proveedor } from '../model/proveedor';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {
  baseUrl = 'http://localhost:8082/api/proveedor';

  constructor(private httpClient: HttpClient) { }

  public ListaProveedor(): Observable<Proveedor[]> {
    return this.httpClient.get<Proveedor[]>(this.baseUrl);
  }

  public ProveedorPorId(id: number): Observable<Proveedor> {
    return this.httpClient.get<Proveedor>(this.baseUrl + `/${id}`);
  }

  GuardarProveedor(proveedor:Proveedor) : Observable<Object>{
    return this.httpClient.post(this.baseUrl, proveedor);
  }

  public ActualizarProveedor(id: number, proveedor: Proveedor): Observable<any> {
    return this.httpClient.put<any>(this.baseUrl + `/${id}`, proveedor);
  }

  public ElimnarProveedor(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.baseUrl + `/${id}`);
  }
}
