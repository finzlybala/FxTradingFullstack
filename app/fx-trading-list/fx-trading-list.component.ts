import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-fx-trading-list',
  templateUrl: './fx-trading-list.component.html',
  styleUrls: ['./fx-trading-list.component.css']
})
export class FxTradingListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.body.className="bg_background";
  }
  
}
