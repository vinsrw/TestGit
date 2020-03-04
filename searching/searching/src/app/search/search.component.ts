import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image.service';
import { Router } from '@angular/router';
import { TextComponent } from '../text/text.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
 
  searchresult:string;
  texts:string[];
  constructor( private ImageService:ImageService, private router: Router) { }

  ngOnInit() {
   
  

  }
  find(){
    this.ImageService.common=this.searchresult;
    this.router.navigateByUrl("Links");

  }
 

}


  

  
