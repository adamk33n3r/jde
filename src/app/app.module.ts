import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PaneModule } from './pane/pane.module';

import { TaskbarComponent } from './taskbar/taskbar.component';
import { WindowManagerService } from './window-manager.service';
import { WindowManagerContainerComponent } from './window-manager-container.component';
import { StartMenuComponent } from './start-menu/start-menu.component';

@NgModule({
  imports: [
    BrowserModule,
    PaneModule,
  ],
  declarations: [
    AppComponent,
    TaskbarComponent,
    WindowManagerContainerComponent,
    StartMenuComponent,
  ],
  entryComponents: [
    WindowManagerContainerComponent,
    TaskbarComponent,
  ],
  providers: [WindowManagerService],
  bootstrap: [AppComponent],
})
export class AppModule { }
