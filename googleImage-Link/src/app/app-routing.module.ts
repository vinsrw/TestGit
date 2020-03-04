import { VideoComponent } from './video/video.component';
import { ImagesComponent } from './images/images.component';
import { LinksComponent } from './links/links.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: 'link', component: LinksComponent },
  {path: 'image', component: ImagesComponent},
  {path: 'video', component: VideoComponent},
  // { path: '',   redirectTo: '/link', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [LinksComponent, ImagesComponent, VideoComponent];
