import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import {ConverterComponent} from './converter.component';
import {ChequeService} from './cheque.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule
  ],
  declarations: [
      ConverterComponent
   ],
   providers : [
       ChequeService
   ],
   exports : [
       ConverterComponent
   ]
})
export class ChequeModule { }