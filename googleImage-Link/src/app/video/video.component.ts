import { Link } from './../link';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ImageService } from './../image.service';


@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})

export class VideoComponent implements OnInit {
  title = 'youTubeApp';
  // youtubeForm: FormGroup;
  // youtubeForm: string = 'cricket';
  // youtubeCast: Link[] = [];

  videos: any[];
  cur: any;

  constructor(private  imageService: ImageService, private router: Router) { }

  ngOnInit() {
    // this.youtubeForm = new FormGroup({
    // keySearch: new FormControl('')
    //  });

    // const tag = document.createElement('script');
    // tag.src = 'https://www.youtube.com/iframe_api';
    // document.body.appendChild(tag);
    this.onVideo();
  }


  onVideo(){
    this.videos = [];
    this.imageService.getVideos().subscribe(values => {
    for (let vid of values["items"]) {
    this.videos.push(vid)
    }
    console.log(values);
    });
    }

  // onVideo() {
  //   this.youtubeCast.splice(0, this.youtubeCast.length);
  //   console.log(this.youtubeForm);
    
  //   /// this.youTubeService.getVideos(this.youtubeForm.value.keySearch).subscribe((data)=>
  //   this.imageService.getVideos().subscribe((data) => {
  //     console.log(data);
  //     for (let i = 0; i < data.items.length; i++) {
  //       const temp = new Link(
  //         data.items[i].id.videoId,
  //         data.items[i].snippet.title,
  //         data.items[i].snippet.description,
  //         data.items[i].snippet.thumbnails
          
  //       )
  //       this.youtubeCast.push(temp);
  //       console.log(this.youtubeCast);
  //       console.log(temp);
  //       // this.forecastForm.value
  //     }
     

  //   });

  // }

  onVideoChange(chVideo: any, indx)
  {
    let cur;
    console.log(indx);
    this.cur= this.videos[0];
    this.videos[0]= chVideo;
    this.videos[indx]= this.cur;

  }

 
}

