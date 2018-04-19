import { Injectable } from "@angular/core";
import { Http } from '@angular/http';

@Injectable()
export class EiaApiDataService {
  constructor(private http: Http) {}
  
  getData(stats) {
    return this.http.get('http://api.eia.gov/series/?api_key=525ff05314eb4c5e93e8686c49f3ae10&series_id=TOTAL.RETCBUS.A', stats);
  }
}
