import { Component, OnInit, HostListener, ViewChild, ElementRef, Input } from '@angular/core';
import { WindowManagerService } from '../window-manager.service';

@Component({
  selector: 'jde-start-menu',
  templateUrl: './start-menu.component.html',
  styleUrls: ['./start-menu.component.scss']
})
export class StartMenuComponent implements OnInit {

  public showMenu: boolean = true;

  @Input()
  public launcher: HTMLElement;

  @ViewChild('menu')
  public menuRef: ElementRef;

  constructor(private windowMgr: WindowManagerService) { }

  public ngOnInit() {
    console.log(this.menuRef);
  }

  public show() {
    console.log('show');
    this.showMenu = true;
  }

  public hide() {
    this.showMenu = false;
  }

  public createPane(count: number = 1) {
    for (let i = 0; i < count; i++) {
      this.windowMgr.createPane();
    }
  }

  @HostListener('document:click', ['$event'])
  public onOutsideClick($event: MouseEvent) {
    console.log('outside click', this.launcher);
    // TODO: Needs to check if you click on a child of menuRef
    if ($event.target === this.menuRef.nativeElement || $event.target === this.launcher) {
      return;
    }

    this.hide();
  }

}
