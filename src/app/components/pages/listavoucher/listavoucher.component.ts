import { Component, OnInit } from '@angular/core';
import {VoucherService} from "../../../Service/voucher.service";
import {Voucher} from "../../Modulos/Voucher";

@Component({
  selector: 'app-listavoucher',
  templateUrl: './listavoucher.component.html',
  styleUrls: ['./listavoucher.component.scss']
})
export class ListavoucherComponent implements OnInit {

  constructor(private vouch: VoucherService) { }
registrovoucher: Voucher[];
  ngOnInit() {
    this.vouch.mostrarvoucher().subscribe( data =>{this.registrovoucher = data})
  }

}
