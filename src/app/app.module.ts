import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChequeModule} from './cheque/cheque.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ChequeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
