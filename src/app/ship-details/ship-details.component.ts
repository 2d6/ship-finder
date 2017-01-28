import { Component, OnInit, Input } from '@angular/core';
import { Ship } from '../ship';
import { Pilot } from './pilot-details/pilot';
import { Pilots } from './pilot-details/pilot-api.service';


@Component({
  selector: 'ship-details',
  templateUrl: './ship-details.component.html',
  styleUrls: ['./ship-details.component.css']
})
export class ShipDetailsComponent implements OnInit {

  pilots: Pilot[] = []

  constructor(private pilotApi: Pilots) { }

  @Input()
  ship: Ship

  ngOnInit() {
    this.findPilots()
  }

  private findPilots() {
    let ship = this.ship
    if (ship != null) {
      ship.pilot_urls.forEach(
        pilot_url => this.pilotApi
          .get_by_url(pilot_url)
          .subscribe(pilot => this.pilots.push(pilot))
      )
    }
  }

}
