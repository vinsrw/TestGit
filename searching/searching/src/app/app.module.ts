import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogosComponent } from './logos/logos.component';
import { VidComponent } from './vid/vid.component';
import { TextComponent } from './text/text.component';
import { SearchComponent } from './search/search.component';
import { ImageService } from './image.service';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { YouTubePlayerModule } from '@angular/youtube-player';


@NgModule({
  declarations: [
    AppComponent,
    LogosComponent,
    VidComponent,
    TextComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule ,
    YouTubePlayerModule ],


  providers: [ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
