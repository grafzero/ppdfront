import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MailCheckService {

  private baseUrl = 'http://www.panasonic-products.com/api/checkEmail';

  constructor(private http: HttpClient) {
  }

  checkMail(): Observable<any> {
    const username = 'user';
    const password = 'password';
    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa(username + ':' + password)});
    return this.http.get(this.baseUrl, {headers});
  }

}
