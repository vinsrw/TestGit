import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute  } from '@angular/router';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  // show:any = false; 
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    
    
    // console.log('sdfasdf--> ',this.router.url);
    
    // if(this.router.url ==='/collaborators')
    //     this.show= true;

  }

  onClick()
  {
    
   var res = prompt("Enter you name");

   if(res)
   {
   
    // this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>  
    // this.router.navigate(["app/collaborators/collborators.component.html"],
    //  { queryParams: { query: form.controls['searchstring'].value } }));
    
      //this.router.navigate(['/collaborators']);
    window.location.href = 'http://localhost:4200/collaborators';
   }
   else
   {
      window.alert("Not possible to navigate");
   }
   
  }

}
