import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Stock} from '../model/stock';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  private baseUrl = 'http://www.panasonic-products.com/api/stocks';

  constructor(private http: HttpClient) {
  }

  getStocksList(): Observable<any> {
    const res = this.http.get(`${this.baseUrl}`);
    console.log(res);
    return res;
  }


}
