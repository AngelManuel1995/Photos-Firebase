import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { PhotosComponent } from './components/photos/photos.component'
import { UploadComponent } from './components/upload/upload.component'
import { PhotosUploader }  from './services/photos-uploader.service'

import { APP_ROUTING }     from './app.routes'
import { NgDropFilesDirective } from './directives/ng-drop-files.directive'

//FireBase
import { AngularFireModule } from 'angularfire2'
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth'
import { environment } from '../environments/environment'

@NgModule({
  declarations: [
    AppComponent,
    PhotosComponent,
    UploadComponent,
    NgDropFilesDirective
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
  ],
  providers: [
    PhotosUploader
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
