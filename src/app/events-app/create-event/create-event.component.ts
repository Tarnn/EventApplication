import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../shared/event.service';
import { ToastrService } from '../../commons/toastr.service';
@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {
  isDirty:boolean = true;

  
  constructor(private route: Router,
              private eventService: EventService,
              private toastr: ToastrService) { }

  ngOnInit() {
     
  }

  cancel(){
    this.route.navigate(['/events']);
  }
  
  saveEventEntry(formValues){
    this.eventService.saveEvent(formValues);
    this.toastr.success('Event Added!');
    // this.isDirty = false;
    this.route.navigate(['/events']);
  }
}
