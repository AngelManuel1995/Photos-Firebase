import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { PhotosComponent } from './components/photos/photos.component'
import { UploadComponent } from './components/upload/upload.component'

import { APP_ROUTING }     from './app.routes'

@NgModule({
  declarations: [
    AppComponent,
    PhotosComponent,
    UploadComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
