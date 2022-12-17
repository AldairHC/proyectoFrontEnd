import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from '../model/categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  baseUrl = 'http://localhost:8082/api/categorias';

  constructor(private httpClient: HttpClient) { }

  public ListaCategoria(): Observable<Categoria[]> {
    return this.httpClient.get<Categoria[]>(this.baseUrl);
  }

  public CategoriaPorId(id: number): Observable<Categoria> {
    return this.httpClient.get<Categoria>(this.baseUrl + `/${id}`);
  }

  GuardarCategoria(categoria:Categoria) : Observable<Object>{
    return this.httpClient.post(this.baseUrl, categoria);
  }

  public ActualizarCategoria(id: number, categoria: Categoria): Observable<any> {
    return this.httpClient.put<any>(this.baseUrl + `/${id}`, categoria);
  }

  public ElimnarCategoria(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.baseUrl + `/${id}`);
  }
}
