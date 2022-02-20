import { VoucherService } from './../../../Service/voucher.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buscarvoucheremit',
  templateUrl: './buscarvoucheremit.component.html',
  styleUrls: ['./buscarvoucheremit.component.scss']
})
export class BuscarvoucheremitComponent implements OnInit {
public buscarCode:String="";
public losvoucher:any;
  constructor(private Code:VoucherService) { }

  ngOnInit(): void {
    this.buscarElVoucher()
  }



  buscarElVoucher(){
    return this.Code.buscaVoucherEmitido().subscribe(res => { this.losvoucher = res})
  }
}
