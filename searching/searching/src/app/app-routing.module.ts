import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TextComponent } from './text/text.component';
import { LogosComponent } from './logos/logos.component';
import { VidComponent } from './vid/vid.component';
import { SearchComponent } from './search/search.component';


const routes: Routes = [
  
    // {
    //   path:'', redirectTo:'LinkComponent',pathMatch:'full'
    // },
  
  {
    path:'Links',component:TextComponent
  },
  {
    path:'Images',component:LogosComponent
  },
  {
    path:'Videos',component:VidComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
