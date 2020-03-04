import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image.service';

@Component({
  selector: 'app-logos',
  templateUrl: './logos.component.html',
  styleUrls: ['./logos.component.css']
})
export class LogosComponent implements OnInit {
  images: any[];
  constructor(private ImageService:ImageService) { }

  ngOnInit() {
    this.details();
  }

  
  details(){
    //alert(this.searchresult)
   // this.ImageService.common=this.searchresult;
    //console.log(this.ImageService.common);
   // this.router.navigateByUrl('/Images');
    this.images = [];
    this.ImageService.listimages().subscribe(values => {
    for (let element of values["results"]) {
    this.images.push(element)
    }
    console.log(values);
    });
    }
}
