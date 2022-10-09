import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FxTradingListComponent } from './fx-trading-list/fx-trading-list.component';
import { BookTradeComponent } from './book-trade/book-trade.component';
import { PrintTradeComponent } from './print-trade/print-trade.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ExitComponent } from './exit/exit.component';
import { HttpClientModule } from '@angular/common/http';
import {MatRadioModule} from '@angular/material/radio';

@NgModule({
  declarations: [
    AppComponent,
    FxTradingListComponent,
    BookTradeComponent,
    PrintTradeComponent,
    PageNotFoundComponent,
    ExitComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatRadioModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
