import { Component, OnInit, ViewChild, ViewEncapsulation, ViewChildren } from '@angular/core';
import { ChequeService } from './cheque.service';

declare var $: any;

@Component({
  selector: 'cheque-converter',
  providers: [ChequeService],
  templateUrl: './converter.component.html'
})
export class ConverterComponent {

  chequeAmount:number;
  chequeInWords:string;
  chequeName:string;

  constructor(private chequeService: ChequeService) {
  }

  ngOnInit() {
  }

  sendClick() {
      this.chequeService.getChequeInWords(this.chequeAmount.toString())
        .subscribe(
            value=>this.chequeInWords = value,
            error=>{
                console.error(error)
            }
        )
  }

}





