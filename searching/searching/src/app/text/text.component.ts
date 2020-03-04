import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image.service';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit {
  searchresult:string;
  texts:string[];

  constructor(private ImageService:ImageService) { }

  ngOnInit() {
    this.links()
  }

  links(){
  
    this.texts= [];
    this.ImageService.listLinks().subscribe(values => {
    for (let element of values["organic_results"]) {
    this.texts.push(element)
    }
    console.log(values);
    });
    }

}
