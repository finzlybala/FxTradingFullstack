import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookTradeComponent } from './book-trade/book-trade.component';
import { ExitComponent } from './exit/exit.component';
import { FxTradingListComponent } from './fx-trading-list/fx-trading-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PrintTradeComponent } from './print-trade/print-trade.component';

const routes: Routes = [
  {
    path:"",component:FxTradingListComponent
  },
  {
    path:"book",component:BookTradeComponent
  },
  {
    path:"print",component:PrintTradeComponent
  },
  {
    path:"exit",component:ExitComponent
  },
  
  {
    path:"**",component:PageNotFoundComponent
  }
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
