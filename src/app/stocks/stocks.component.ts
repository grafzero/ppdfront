import {Component, OnInit} from '@angular/core';
import {Stock} from '../model/stock';
import {StockService} from '../service/stock.service';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css']
})
export class StocksComponent implements OnInit {

  stocks: Observable<Stock[]>;

  constructor(private stockService: StockService) {
  }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.stocks = this.stockService.getStocksList();
  }


}
