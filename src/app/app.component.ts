import { Component } from '@angular/core';
import { Ship } from './ship';
import { Pilot } from './pilot';
import { Ships } from './ship-api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private shipApi: Ships) { }

  ships: Ship[] = []

  findShip(query: String): void {
    this.shipApi.find(query).subscribe(ships => this.setShips(ships))
  }

  setShips(ships: Ship[]) {
    this.ships = ships
  }
  
  runSearch(query: string) {
    console.log(query)
    this.findShip(query)
  }
}
