import { Component } from '@angular/core';
import { EiaApiDataService } from './eia-api-data/eia-api-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private EiaApiDataService: EiaApiDataService) {

  }
}
