import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image.service';

@Component({
  selector: 'app-vid',
  templateUrl: './vid.component.html',
  styleUrls: ['./vid.component.css']
})
export class VidComponent implements OnInit {
  videos: any[];
  temp: any;

  constructor(private ImageService:ImageService) { }

  ngOnInit() {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
    this.details();
  }

  details(){
    this.videos = [];
    this.ImageService.listVideos().subscribe(values => {
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