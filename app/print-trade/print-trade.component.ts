import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-print-trade',
  templateUrl: './print-trade.component.html',
  styleUrls: ['./print-trade.component.css']
})
export class PrintTradeComponent implements OnInit {
   datas:any[]=[];
  constructor(private service:HttpService) { }

  ngOnInit(): void {
    this.trade();
  }

  trade(){
    this.service.print().subscribe((res:any)=>{
      console.log(res);
      this.datas=res;
    })

}}
