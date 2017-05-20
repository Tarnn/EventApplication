import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-events-thumbnail',
  templateUrl: './events-thumbnail.component.html',
  styleUrls: ['./events-thumbnail.component.css']
})
export class EventsThumbnailComponent implements OnInit {
  @Input() event: any;
  constructor() { }

  ngOnInit() {
  }

  getStartTimeClass(): {} {
    const isEarlyStart = this.event && this.event.time === '8:00 am';
    const isNormalStart = this.event && this.event.time === '9:00 am';
    const isLateStart = this.event && this.event.time === '10:00 am';
    return { green: isEarlyStart, bold: isEarlyStart, blue: isNormalStart, red: isLateStart }
  }
}
