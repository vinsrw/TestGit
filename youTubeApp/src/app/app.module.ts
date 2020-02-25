import { MiniYoutubeService } from './mini-youtube.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { YoutubeComponent } from './youtube/youtube.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgxYoutubePlayerModule} from 'ngx-youtube-player';

@NgModule({
  declarations: [
    AppComponent,
    YoutubeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    NgxYoutubePlayerModule.forRoot()
    ],
  providers: [MiniYoutubeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
