import { ServerModule } from '@angular/platform-server';import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [BrowserModule.withServerTransition({ appId: 'app' }), ServerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
