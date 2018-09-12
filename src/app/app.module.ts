import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PaneModule } from './pane/pane.module';
import { WindowManagerComponent } from './window-manager/window-manager.component';
import { TaskbarComponent } from './taskbar/taskbar.component';

@NgModule({
  declarations: [
    AppComponent,
    WindowManagerComponent,
    TaskbarComponent,
  ],
  imports: [
    BrowserModule,
    PaneModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [WindowManagerComponent]
})
export class AppModule { }
