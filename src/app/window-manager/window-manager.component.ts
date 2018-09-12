import { Component, OnInit, Renderer2 } from '@angular/core';

import { PaneComponent } from '../pane/pane.component';

@Component({
  selector: 'jde-window-manager',
  templateUrl: './window-manager.component.html',
  styleUrls: ['./window-manager.component.scss']
})
export class WindowManagerComponent implements OnInit {

  // Priority Queue
  public panes: PaneComponent[] = [];

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
  }

  public registerPane(pane: PaneComponent) {
    this.panes.push(pane);
  }

  public createPane() {}

  public bringToFront(pane: PaneComponent) {
    this.panes.forEach((p) => {
      if (pane === p) {
        this.renderer.setStyle(p.element, 'z-index', this.panes.length - 1);
      } else {
        const currentZ = p.element.style.getPropertyValue('z-index');
        this.renderer.setStyle(p.element, 'z-index', +currentZ - 1);
      }
    });
  }

}
