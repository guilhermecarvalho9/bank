import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

import { TransferenciaService } from './services/transferencia.service';
import { AppComponent } from './app.component';
import { NovaTransferenciaComponent } from './nova-transferencia/nova-transferencia/nova-transferencia.component';
import { ExtratoComponent } from './extrato/extrato.component';

registerLocaleData(localePt, 'pt')

@NgModule({
  declarations: [
    AppComponent,
    NovaTransferenciaComponent,
    ExtratoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,

  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'pt-br' },
    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: 'BRL',
    },
    TransferenciaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
