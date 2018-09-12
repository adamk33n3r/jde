import { Component, OnInit, ElementRef, Renderer } from '@angular/core';

@Component({
    selector: 'jde-window-manager-container',
    template: `<ng-content></ng-content>`,
})
export class WindowManagerContainerComponent implements OnInit {

    constructor(public elementRef: ElementRef, public renderer: Renderer) { }

    public ngOnInit() { }
}
