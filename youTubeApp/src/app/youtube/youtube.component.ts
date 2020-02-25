import { Link } from './../link';
import { MiniYoutubeService } from './../mini-youtube.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.css']
})

export class YoutubeComponent implements OnInit {
  title = 'youTubeApp';
  // youtubeForm: FormGroup;
  youtubeForm: string = 'dog';
  youtubeCast: Link[] = [];
  videos: any[];
  cur: Link;

  constructor(private youTubeService: MiniYoutubeService) { }

  ngOnInit() {
    // this.youtubeForm = new FormGroup({
    // keySearch: new FormControl('')
    //  });

    // const tag = document.createElement('script');
    // tag.src = 'https://www.youtube.com/iframe_api';
    // document.body.appendChild(tag);
  }

  onSubmit() {
    this.youtubeCast.splice(0, this.youtubeCast.length);
    console.log(this.youtubeForm);
    
    /// this.youTubeService.getVideos(this.youtubeForm.value.keySearch).subscribe((data)=>
    this.youTubeService.getVideos(this.youtubeForm).subscribe((data) => {
      console.log(data.items);
      for (let i = 0; i < data.items.length; i++) {
        const temp = new Link(
          data.items[i].id.videoId,
          data.items[i].snippet.title,
          data.items[i].snippet.description,
          data.items[i].snippet.thumbnails
          //data.item[i].snippet.thumbnails
        )
        this.youtubeCast.push(temp);
        console.log(this.youtubeCast);
        console.log(temp);
        // this.forecastForm.value
      }
     

    });

  }

  onVideoChange(chVideo: any, indx)
  {
    let cur;
   console.log(indx);
    this.cur= this.youtubeCast[0];
    this.youtubeCast[0]= chVideo;
    this.youtubeCast[indx]= this.cur;

  }

 
}

