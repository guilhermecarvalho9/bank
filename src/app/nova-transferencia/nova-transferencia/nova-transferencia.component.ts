import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent implements OnInit {

  @Output() aoTransferir = new EventEmitter<any>;

  valor: number;
  destino: number;

  constructor() { }

  ngOnInit(): void {
  }

  transferir() {
    console.log('Sua transêrencia foi enviada com sucesso!');
    // console.log(`Valor: ${this.valor}`);
    // console.log(`Destino: ${this.destino}`);
    // document.querySelector('.resultado').innerHTML = `
    // <p>Valor: ${this.valor}</p>
    // <p>Destino: ${this.destino}</p>`
    const valorEmitido = {valor: this.valor, destino: this.destino};
    this.aoTransferir.emit(valorEmitido);
    this.limparDados();
  }

  limparDados() {
    this.valor = 0;
    this.destino = 0;
  }
}
