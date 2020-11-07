import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';
import { ImageDetailsComponent } from './image-details/image-details.component';


const routes: Routes = [{
  path:"",redirectTo:"gallery",pathMatch:"full"
},{
  path:"gallery",component:GalleryComponent
},{
  path:"imagedetails/:id",component:ImageDetailsComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
