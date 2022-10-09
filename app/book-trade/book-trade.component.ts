import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-book-trade',
  templateUrl: './book-trade.component.html',
  styleUrls: ['./book-trade.component.css']
})
export class BookTradeComponent implements OnInit {
  amount:string='';
  name:string='';
  ratemsg: string='';
  responsemsg:string='';
  currencypair:any[]=[
    {
      currencypair:"USDINR",
    }
  ];
  
  constructor(private service:HttpService,
              private router:Router) { }

  ngOnInit(): void {
  }

  onBook(f:NgForm){

    let obj={
      customerName:f.value.customername,
      currencyPair:f.value.currencypair.currencypair,
      transferAmount:f.value.amount
      
    }
    console.log(obj);
    this.service.book(obj).subscribe((response:any)=>
    {
      alert("Your Trade was Booked Successfully.....");
      console.log(response);
      this.responsemsg=response;
    })
  }

 onChange(myevent:any){
  if(myevent.value==1){
    this.amount=(<HTMLInputElement>document.getElementById("amount")).value;
    this.name=(<HTMLInputElement>document.getElementById("name")).value;
    console.log((<HTMLInputElement>document.getElementById("amount")).value)
    console.log((<HTMLInputElement>document.getElementById("name")).value)
    console.log((<HTMLInputElement>document.getElementById("currencypair")).value)
    this.ratemsg='you are transferring INR '+(66.00*(+this.amount))+' to '+this.name;
  }
 }


 onCancel(){
  alert("Trade is Canceled. ");
this.router.navigate(['']);
 }

 onBack(){
  this.router.navigate(['']);
 }
}

