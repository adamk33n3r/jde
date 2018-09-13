import { Component } from '@angular/core';
import { WindowManagerService } from './window-manager.service';

@Component({
  selector: 'jde-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private manager: WindowManagerService) {
    this.manager.init();
  }

  public createPane() {
    this.manager.createPane();
  }
}
