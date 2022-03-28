import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TxtCompComponent } from './txt-comp/txt-comp.component';
import { CreateNewBucketComponent } from './create-new-bucket/create-new-bucket.component';
import { MyNewStorageComponent } from './my-new-storage/my-new-storage.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    TxtCompComponent,
    CreateNewBucketComponent,
    MyNewStorageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
