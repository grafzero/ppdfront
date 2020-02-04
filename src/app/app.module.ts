import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {FormsModule} from '@angular/forms';
import {HeaderComponent} from './header/header.component';
import {LogoutComponent} from './logout/logout.component';
import {EventsComponent} from './events/events.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {BasicAuthInterceptorService} from './service/basic-auth-interceptor.service';
import { StocksComponent } from './stocks/stocks.component';
import { StockEditComponent } from './stock-edit/stock-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    LogoutComponent,
    EventsComponent,
    StocksComponent,
    StockEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptorService, multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
