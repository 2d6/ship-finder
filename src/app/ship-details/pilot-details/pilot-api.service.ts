import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import { Pilot } from './pilot'
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class Pilots {

  constructor(private http: Http) { }

  get_by_url(pilot_url: string): Observable<Pilot> {
    return this.http.get(pilot_url)
      .map(result => <Array<any>>result.json())
      .map(this.mapToPilot)
  }

  private mapToPilot(json: any): Pilot {
    let pilot = new Pilot()
    pilot.name = json.name
    return pilot
  }
}
