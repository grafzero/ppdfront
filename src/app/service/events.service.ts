import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {formatDate} from '@angular/common';
import {Event} from '../model/event';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  private baseUrl = 'http://www.panasonic-products.com/api/events';

  constructor(private http: HttpClient) {
  }

  getEventsList(): Observable<Event[]> {

    // formatting date here from long to readable
    const result: Observable<Event[]> = this.http.get(this.baseUrl).pipe(map(res => {
      const items = res as Event[];
      items.forEach(item => this.setFormatedDate(item));
      return items;
    }));
    return result;
  }

  getEventsByEventType(eventType) {
    // formatting date here from long to readable
    const result: Observable<Event[]> = this.http.get(this.baseUrl + '/' + eventType).pipe(map(res => {
      const items = res as Event[];
      items.forEach(item => this.setFormatedDate(item));
      return items;
    }));
    return result;
  }


  private setFormatedDate(event: Event) {
    const format = 'dd/MM/yyyy HH:mm:ss';
    const locale = 'en-US';
    event.formatedDate = formatDate(event.createdAt, format, locale);
  }


}


