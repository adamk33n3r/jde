import { Component, OnInit } from '@angular/core';

import { WindowManagerService } from '../window-manager.service';
import { PaneComponent } from '../pane/pane.component';

@Component({
  selector: 'jde-taskbar',
  templateUrl: './taskbar.component.html',
  styleUrls: ['./taskbar.component.scss']
})
export class TaskbarComponent implements OnInit {

  public manager: WindowManagerService;

  constructor() { }

  public ngOnInit() {
  }

  public onClickPane(pane: PaneComponent) {
    this.manager.bringToFront(pane);
  }

}
