import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ImageService } from './../image.service';



@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})
export class LinksComponent implements OnInit {

  imageForm: string = '';
  //images: Link[] = [];
  searchKey: string;
  links: any[];
 
    constructor(private  imageService: ImageService, private router: Router) { }

  ngOnInit() {
    this.onLinks();
  }

  onLinks()
  {

    //this.router.navigateByUrl('/Images');
    this.links = [];
    this.imageService.getLinks().subscribe(values => {
    for (let img of values["organic_results"]) {
    this.links.push(img);
    }
    console.log(values);
    });
    }

}
