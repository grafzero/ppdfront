import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {LogoutComponent} from './logout/logout.component';
import {EventsComponent} from './events/events.component';
import {AuthGaurdService} from './service/auth-gaurd.service';
import {StocksComponent} from './stocks/stocks.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent, canActivate: [AuthGaurdService]},
  {path: 'events', component: EventsComponent, canActivate: [AuthGaurdService]},
  {path: 'stocks', component: StocksComponent, canActivate: [AuthGaurdService]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
