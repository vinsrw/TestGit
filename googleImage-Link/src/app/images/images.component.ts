import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ImageService } from './../image.service';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {
  
  imageForm: string = '';
  //images: Link[] = [];
  searchKey: string;
  images: any[];
 
  constructor(private  imageService: ImageService, private router: Router) { }

  ngOnInit() {
    this.onImage();
    
  }

  onImage()
  {

    //this.router.navigateByUrl('/Images');
    this.images = [];
    this.imageService.getImages().subscribe(values => {
    for (let img of values["results"]) {
    this.images.push(img);
    }
    console.log(values);
    });
    }

  }




