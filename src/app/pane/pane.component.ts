import { Component, OnInit, Renderer2, ElementRef, Input, HostListener, Inject, forwardRef, Injector, InjectionToken, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

import { WindowManagerService } from '../window-manager.service';

@Component({
  selector: 'jde-pane',
  templateUrl: './pane.component.html',
  styleUrls: ['./pane.component.scss']
})
export class PaneComponent implements OnInit {

  @Input()
  public title: string = 'TITLE';

  public dragging: boolean = false;

  public get element(): HTMLElement {
    return this.elementRef.nativeElement;
  }

  public onMouseDown: Subject<PaneComponent> = new Subject();
  public onStartDrag: Subject<PaneComponent> = new Subject();

  private dragX: number;
  private dragY: number;

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
    // private manager: WindowManagerService,
    // $injector: Injector,
  ) {
    // const token = new InjectionToken<WindowManagerService>('WindowManagerService');
    // this.manager = $injector.get(token);
    // console.log(this.manager);
  }

  public ngOnInit() {
    // console.log(this.manager);
  }

  @HostListener('mousedown')
  public mouseDown() {
    this.onMouseDown.next(this);
  }

  public startDrag(offsetX, offsetY) {
    this.dragX = offsetX;
    this.dragY = offsetY;
    this.dragging = true;
    this.onStartDrag.next(this);
  }

  public stopDrag() {
    this.dragging = false;
  }

  public move(event: MouseEvent) {
    const x = event.clientX - this.dragX;
    const y = event.clientY - this.dragY;

    this.renderer.setStyle(this.elementRef.nativeElement, 'left', `${x}px`);
    this.renderer.setStyle(this.elementRef.nativeElement, 'top', `${y}px`);
  }

}
