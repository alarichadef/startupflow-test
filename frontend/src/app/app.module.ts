import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material';
import {MatButtonModule} from '@angular/material';
import {MatDialogModule} from '@angular/material';
import {ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PicturesListComponent } from './pictures-list/pictures-list.component';
import { PictureDetailsComponent } from './picture-details/picture-details.component';
import { PictureUploadComponent } from './picture-upload/picture-upload.component';

@NgModule({
  declarations: [
    AppComponent,
    PicturesListComponent,
    PictureDetailsComponent,
    PictureUploadComponent,
  ],
  entryComponents: [PictureDetailsComponent],
  exports: [PictureDetailsComponent],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
