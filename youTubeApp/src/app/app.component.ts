import { MiniYoutubeService } from './mini-youtube.service';
import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'youTubeApp';
  
  videos: any[];
  iframe_html: any;
  private unsubscribe$: Subject<any> = new Subject();

  constructor(private spinner: NgxSpinnerService, private youTubeService: MiniYoutubeService) { }

  }



