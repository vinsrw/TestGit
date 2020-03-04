import { Router, Event } from '@angular/router';
import { ImageService } from './../image.service';
import { Link } from './../link';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // imageForm: string = '';
  // //images: Link[] = [];
  searchKey: string;
  // images: any[];
 
  constructor(private  imageService: ImageService, private router: Router) { }

  ngOnInit()
  {
  }


  onSubmit()
  {
    this.imageService.searched = this.searchKey;
    this.router.navigateByUrl("/link");
   // this.router.onSameUrlNavigation = 'reload';
  }


}
