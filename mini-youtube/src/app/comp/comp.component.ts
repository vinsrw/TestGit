import { Component, OnInit } from '@angular/core';
import {YoutubeService} from '../youtube.service';
@Component({
  selector: 'app-comp',
  templateUrl: './comp.component.html',
  styleUrls: ['./comp.component.css']
})
export class CompComponent implements OnInit {
  title = 'vid';
  videos: any[];
  searchresult:string;
  temp: any;

  constructor(private youTubeService: YoutubeService) { }

  ngOnInit() {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
  }

  details(searchresult){
    this.videos = [];
    this.youTubeService.listVideos(this.searchresult).subscribe(values => {
    for (let element of values["items"]) {
    this.videos.push(element)
    }
    console.log(values);
    });
    }


    change(data:any,i){
      console.log(i)
      this.temp=this.videos[0]
      this.videos[0]=data;
      this.videos[i]=this.temp;
    }
    
      }


