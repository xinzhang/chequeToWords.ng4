import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import {ConverterComponent} from './converter.component';
import {ChequeService} from './cheque.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule    
  ],
  declarations: [
      ConverterComponent
   ],
   providers : [
       ChequeService
   ]
})
export class ChequeModule { }
