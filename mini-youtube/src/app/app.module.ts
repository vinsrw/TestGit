import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { YoutubePlayer, YoutubePlayerService } from 'ng2-youtube-player';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {YoutubeService} from './youtube.service';
import { CompComponent } from './comp/comp.component';
import {NgxYoutubePlayerModule} from 'ngx-youtube-player';


@NgModule({
  declarations: [
    AppComponent,
    CompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
   // YoutubePlayer,
    //YoutubePlayerService,
    NgxYoutubePlayerModule,
    FormsModule
  ],
  providers: [YoutubeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
