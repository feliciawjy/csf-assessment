import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainComponent } from './views/main.component';
import { PictureComponent } from './views/picture.component';

import { WebcamModule } from 'ngx-webcam';
// import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { UploadService } from './upload.service';
import { CameraService } from './camera.service';
import { RouterModule, Routes } from '@angular/router';

const appRoute: Routes = [
  { path: '', component: MainComponent },
  { path: 'upload', component: PictureComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent, MainComponent, PictureComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    WebcamModule,
    RouterModule.forRoot(appRoute, {useHash: true})
  ],
  providers: [UploadService, CameraService],
  bootstrap: [AppComponent]
})
export class AppModule { }
