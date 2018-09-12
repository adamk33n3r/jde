import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaneComponent } from './pane.component';
import { PaneTitleComponent } from './pane-title/pane-title.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    PaneComponent,
    PaneTitleComponent,
  ],
  entryComponents: [
    PaneComponent,
    PaneTitleComponent,
  ],
  exports: [
    PaneComponent,
  ],
})
export class PaneModule { }
