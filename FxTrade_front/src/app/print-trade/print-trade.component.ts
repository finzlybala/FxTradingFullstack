import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-print-trade',
  templateUrl: './print-trade.component.html',
  styleUrls: ['./print-trade.component.css']
})
export class PrintTradeComponent implements OnInit {
   datas:any[]=[];
   p:number=1;
  
  constructor(private service:HttpService ,
              private router:Router) { }

  ngOnInit(): void {
    document.body.className="bg_background"
    this.trade();
  }

  trade(){
    this.service.print().subscribe((res:any)=>{
      console.log(res);
      this.datas=res;
    })
  }
onClick(){
  this.router.navigate(['']);
}

}

