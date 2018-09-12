import { Component, OnInit, Renderer2, ElementRef, Input, HostListener } from '@angular/core';

import { WindowManagerComponent } from '../window-manager/window-manager.component';

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

  private dragX: number;
  private dragY: number;

  constructor(private elementRef: ElementRef, private renderer: Renderer2, private manager: WindowManagerComponent) { }

  ngOnInit() {
    this.manager.registerPane(this);
  }

  @HostListener('mousedown')
  public onMouseDown() {
    this.manager.bringToFront(this);
  }

  public startDrag(offsetX, offsetY) {
    this.dragX = offsetX;
    this.dragY = offsetY;
    this.dragging = true;
    this.manager.bringToFront(this);
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
