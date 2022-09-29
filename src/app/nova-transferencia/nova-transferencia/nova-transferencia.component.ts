import { Transferencia } from 'src/models/transferencias.model';
import { TransferenciaService } from './../../services/transferencia.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent implements OnInit {

  @Output() aoTransferir = new EventEmitter<any>;

  valor: number;
  destino: number;

  constructor(private transferenciaService: TransferenciaService, private router: Router) { }

  ngOnInit(): void {
  }

  transferir() {
    console.log('Sua transferência foi enviada com sucesso!');
    const valorEmitido: Transferencia = {valor: this.valor, destino: this.destino};
    this.transferenciaService.adicionar(valorEmitido).subscribe((resultado) => {
      console.log(resultado);
      this.limparDados();
    });
    this.router.navigateByUrl('extrato');
  }

  limparDados() {
    this.valor = 0;
    this.destino = 0;
  }
}
