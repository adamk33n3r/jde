import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';

@Component({
    selector: 'jde-window-manager-container',
    template: `<div class='background'></div>`,
    styles: [ '.background { height: 100vh; width: 100vw; background: moccasin }' ],
})
export class WindowManagerContainerComponent implements OnInit {

    constructor(public elementRef: ElementRef, public renderer: Renderer2) { }

    public ngOnInit() { }
}
