import { Component, OnInit, Input } from '@angular/core';
import { Pilot } from './pilot';

@Component({
  selector: 'pilot-details',
  templateUrl: './pilot-details.component.html',
  styleUrls: ['./pilot-details.component.css']
})
export class PilotDetailsComponent implements OnInit {

  @Input()
  pilots: Pilot[]

  constructor() { }

  ngOnInit() {
  }

}
