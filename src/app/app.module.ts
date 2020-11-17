import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// PIPES
import { LetrasPipe } from './Pipes/letras/letras.pipe';
import { CantidadPipe } from './Pipes/cantidad/cantidad.pipe';
import { DolarPesoPipe } from './Pipes/dolar-peso/dolar-peso.pipe';
import { NumerosLetrasPipe } from './Pipes/numeros-letras/numeros-letras.pipe';
import { NumerosRomanosPipe } from './Pipes/numeros-romanos/numeros-romanos.pipe';
import { DecimalBinarioPipe } from './Pipes/decimalBinario/decimal-binario.pipe';
import { DecimalHexadecimalPipe } from './Pipes/decimalHexadecimal/decimal-hexadecimal.pipe';
import { DecimalOctalPipe } from './Pipes/decimalOctal/decimal-octal.pipe';

// COMPONENTS
import { NavbarComponent } from './Components/shared/navbar/navbar.component';
import { ClaseComponent } from './Components/clase/clase.component';
import { PracticaComponent } from './Components/practica/practica.component';
import { HomeComponent } from './Components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LetrasPipe,
    CantidadPipe,
    DolarPesoPipe,
    NumerosLetrasPipe,
    NumerosRomanosPipe,
    DecimalBinarioPipe,
    DecimalHexadecimalPipe,
    DecimalOctalPipe,
    NavbarComponent,
    ClaseComponent,
    PracticaComponent,
    HomeComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
