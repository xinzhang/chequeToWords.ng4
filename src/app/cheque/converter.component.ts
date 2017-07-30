import { Component, OnInit, ViewChild, ViewEncapsulation, ViewChildren } from '@angular/core';
import { ChequeService } from './cheque.service';

declare var $: any;

@Component({
  selector: 'cheque-converter',
  providers: [ChequeService],
  templateUrl: './converter.component.html'
})
export class ConverterComponent {

  chequeInWords:string;

  constructor(private chequeService: ChequeService) {
  }

  ngOnInit() {
  }

  

}





