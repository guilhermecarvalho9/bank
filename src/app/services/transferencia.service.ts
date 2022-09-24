import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  private listaTransferencia : any[] = [];

  constructor() { }

  get transferencias() {
    return this.listaTransferencia;
  }

  adicionar(transferencia: any) {
    this.hidratar(transferencia);
    this.listaTransferencia.push(transferencia);
  }

  private hidratar(transferencia) {
    transferencia.data = new Date();
  }

}
