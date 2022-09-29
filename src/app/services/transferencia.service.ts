import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transferencia } from 'src/models/transferencias.model';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  private listaTransferencia : any[] = [];
  private url: string = 'http://localhost:3000/transferencias';

  constructor(private httpClient: HttpClient) { }

  todas(): Observable<Transferencia[]> {
    return this.httpClient.get<Transferencia[]>(this.url);
  }

  get transferencias() {
    return this.listaTransferencia;
  }

  adicionar(transferencia: Transferencia): Observable<Transferencia> {
    this.hidratar(transferencia);
    return this.httpClient.post<Transferencia>(this.url, transferencia);
  }

  private hidratar(transferencia) {
    transferencia.data = new Date();
  }

}
