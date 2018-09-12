import {
  Component,
  OnInit,
  Renderer2,
  ComponentFactoryResolver,
  Injector,
  ViewContainerRef,
  ViewChild,
} from '@angular/core';

import { PaneComponent } from '../pane/pane.component';

@Component({
  selector: 'jde-window-manager',
  templateUrl: './window-manager.component.html',
  styleUrls: ['./window-manager.component.scss']
})
export class WindowManagerComponent implements OnInit {

  // Priority Queue
  public panes: PaneComponent[] = [];

  @ViewChild('target', { read: ViewContainerRef })
  private viewContainerRef: ViewContainerRef;


  constructor(
    private renderer: Renderer2,
    private resolver: ComponentFactoryResolver,
    private injector: Injector,
  ) { }

  ngOnInit() {
    this.createPane();
    this.createPane();
  }

  public registerPane(pane: PaneComponent) {
    this.panes.push(pane);
  }

  public createPane() {
    const factory = this.resolver.resolveComponentFactory(PaneComponent);
    // const comp = factory.create(this.injector);
    this.viewContainerRef.createComponent(factory);
  }

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
