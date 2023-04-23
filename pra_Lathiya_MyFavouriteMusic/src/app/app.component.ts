import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private swUpdate: SwUpdate) {
    setInterval(() => {
      swUpdate.checkForUpdate();
    }, 30 * 60 * 1000); // check for updates every 30 minutes
  }
}
