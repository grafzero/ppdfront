import {Component, OnInit} from '@angular/core';
import {EventsService} from '../service/events.service';
import {Event} from '../model/event';
import {MailCheckService} from '../service/mail-check.service';


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  events: Event[];
  checkingMail = false;


  constructor(private eventsService: EventsService, private checkMailService: MailCheckService) {
  }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.eventsService.getEventsList().subscribe(evs => this.events = evs);
  }

  startMailCheck() {
    this.checkingMail = true;
    this.checkMailService.checkMail().subscribe();
    this.sleep(10000).then(() => {
      this.checkingMail = false;
      this.reloadData();
    });

  }

  getByEventType(eventType) {
    this.eventsService.getEventsByEventType(eventType).subscribe(evs => this.events = evs);
  }


  sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
  }


}
