import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {User} from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient: HttpClient) {
  }

  authenticate(username, password) {
    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa(username + ':' + password)});

    const userObservable = this.httpClient.get<User>('https://www.panasonic-products.com/api/user', {headers}).pipe(
      map(
        userData => {
          sessionStorage.setItem('username', username);
          const authString = 'Basic ' + btoa(username + ':' + password);
          sessionStorage.setItem('basicauth', authString);
          return userData;
        }
      )
    );

    return userObservable;
  }

  isUserLoggedIn() {
    const user = sessionStorage.getItem('username');
    return !(user === null);
  }

  getUsername() {
    if (this.isUserLoggedIn()) {
      return sessionStorage.getItem('username');
    } else {
      return 'Anon';
    }
  }

  logOut() {
    sessionStorage.removeItem('username');
  }

}
