import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import { Ship } from './ship'
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class Ships {

  private base_url = "http://swapi.co/api/starships"

  constructor(private http: Http) { }

  find(query: String): Observable<Ship[]> {
    let url = this.base_url + "?search=" + query
    return this.http.get(url)
      .map(result => <Array<any>>result.json().results)
      .map(ships => ships.map(this.mapToShip))
  }

  private mapToShip(json: any): Ship {
    let ship = new Ship()
    ship.name = json.name
    ship.model = json.model
    ship.manufacturer = json.manufacturer
    ship.pilot_urls = json.pilots
    return ship
  }
}
