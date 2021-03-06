import { Component, OnInit, Input, HostListener } from '@angular/core';
import { PaneComponent } from '../pane.component';

@Component({
  selector: 'jde-pane-title',
  templateUrl: './pane-title.component.html',
  styleUrls: ['./pane-title.component.scss']
})
export class PaneTitleComponent implements OnInit {

  @Input()
  public title: string = 'TITLE';

  private clickedPosX: number;
  private clickedPosY: number;

  constructor(private pane: PaneComponent) { }

  ngOnInit() {
  }

  @HostListener('mousedown', ['$event'])
  public onMouseDown(event: MouseEvent) {
    if (event.button !== 0) {
      return;
    }

    this.clickedPosX = event.offsetX;
    this.clickedPosY = event.offsetY;
    this.pane.startDrag(event.offsetX, event.offsetY);
  }

  @HostListener('document:mouseup')
  public onMouseUp() {
    this.pane.stopDrag();
  }

  @HostListener('document:mousemove', ['$event'])
  public onMouseMove(event: MouseEvent) {
    if (!this.pane.dragging) {
      return;
    }

    this.pane.move(event);
  }

  public onActionClick(event: Event) {
    event.stopPropagation();
  }

}
