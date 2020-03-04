import { EditorComponent } from './editor/editor.component';
import { CollboratorsComponent } from './collborators/collborators.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: '/editor', pathMatch: 'full'},
  { path: 'editor', component:  EditorComponent},
    {path: 'collaborators', component: CollboratorsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [EditorComponent, CollboratorsComponent]
