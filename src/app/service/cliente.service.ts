import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../model/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  baseUrl = 'http://localhost:8082/api/cliente';

  constructor(private httpClient: HttpClient) { }

  public ListaCliente(): Observable<Cliente[]> {
    return this.httpClient.get<Cliente[]>(this.baseUrl);
  }

  public ClientePorId(id: number): Observable<Cliente> {
    return this.httpClient.get<Cliente>(this.baseUrl + `/${id}`);
  }

  GuardarCliente(cliente:Cliente) : Observable<Object>{
    return this.httpClient.post(this.baseUrl, cliente);
  }

  public ActualizarCliente(id: number, cliente: Cliente): Observable<any> {
    return this.httpClient.put<any>(this.baseUrl + `/${id}`, cliente);
  }

  public ElimnarCliente(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.baseUrl + `/${id}`);
  }
}
