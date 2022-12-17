import { Empleado } from './../model/empleado';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  baseUrl = 'http://localhost:8082/api/empleado';

  constructor(private httpClient: HttpClient) { }

  public ListaEmpleado(): Observable<Empleado[]> {
    return this.httpClient.get<Empleado[]>(this.baseUrl);
  }

  public EmpleadoPorId(id: number): Observable<Empleado> {
    return this.httpClient.get<Empleado>(this.baseUrl + `/${id}`);
  }

  GuardarEmpleado(empleado:Empleado) : Observable<Object>{
    return this.httpClient.post(this.baseUrl, empleado);
  }

  public ActualizarEmpleado(id: number, empleado: Empleado): Observable<any> {
    return this.httpClient.put<any>(this.baseUrl + `/${id}`, empleado);
  }

  public ElimnarEmpleado(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.baseUrl + `/${id}`);
  }
}
