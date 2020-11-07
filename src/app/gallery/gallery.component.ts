import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { image } from "../image.model";
import { Router } from "@angular/router";
import { ProductsService } from "../products.service";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
   public images = []
  constructor(private http:HttpClient,
    private router:Router,private pSer:ProductsService) { }

  ngOnInit(): void {
    this.pSer.getImages().subscribe((res)=>{
      console.log(res);
      this.images=res.photos.photo;
      console.log(this.images)
    })
  }
  goToImageDetails(i){
    let id = this.images[i].id;
    console.log(id);
    this.router.navigate(['/imagedetails',id]);
  }

}
