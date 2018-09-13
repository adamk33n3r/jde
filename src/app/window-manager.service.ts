import { Injectable, Renderer2, RendererFactory2, ComponentRef } from '@angular/core';

import { PaneComponent } from './pane/pane.component';
import { DomService } from './dom.service';
import { WindowManagerContainerComponent } from './window-manager-container.component';
import { TaskbarComponent } from './taskbar/taskbar.component';

@Injectable()
export class WindowManagerService {

  // Priority Queue
  public panes: PaneComponent[] = [];

  private renderer: Renderer2;

  private containerElement: HTMLElement;
  private taskbarRef: ComponentRef<TaskbarComponent>;

  constructor(
    private dom: DomService,
    private rendererFactory: RendererFactory2,
  ) {
    this.renderer = this.rendererFactory.createRenderer(null, null);
  }

  public init() {
    this.taskbarRef = this.dom.createComponent(TaskbarComponent);
    this.taskbarRef.instance.manager = this;
    this.dom.appendChild(this.taskbarRef);

    const comp = this.dom.createComponent(WindowManagerContainerComponent);
    this.dom.appendChild(comp);
    this.containerElement = comp.instance.elementRef.nativeElement;
  }

  public registerPane(pane: PaneComponent) {
    this.panes.push(pane);
  }

  public createPane() {
    const compRef = this.dom.createComponent(PaneComponent);
    compRef.instance.title = '' + Math.random();
    this.dom.appendChild(compRef, this.containerElement);
    this.setPosition(compRef.instance, 425, 200);
  }

  public bringToFront(pane: PaneComponent) {
    // Rewrite with priority queue
    this.panes.forEach((p) => {
      if (pane === p) {
        this.renderer.setStyle(p.element, 'z-index', this.panes.length - 1);
      } else {
        let currentZ = +p.element.style.getPropertyValue('z-index');
        currentZ = currentZ === 0 ? 1 : currentZ;
        this.renderer.setStyle(p.element, 'z-index', +currentZ - 1);
      }
    });
  }

  private setPosition(pane: PaneComponent, x: number, y: number) {
    this.renderer.setStyle(pane.element, 'top', `${y}px`);
    this.renderer.setStyle(pane.element, 'left', `${x}px`);
  }

}
