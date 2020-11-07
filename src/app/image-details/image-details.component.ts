import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HttpClient, HttpEventType } from "@angular/common/http";
import { ProductsService } from "../products.service";

@Component({
  selector: 'app-image-details',
  templateUrl: './image-details.component.html',
  styleUrls: ['./image-details.component.css']
})
export class ImageDetailsComponent implements OnInit {
public id:string ;
public image:string;
public iDetails:any
public downloaded=false;
public avatarStyle = {
 backgroundColor:"red"
}
  constructor(private route:ActivatedRoute,
    private http:HttpClient,private pSer:ProductsService) { }

  ngOnInit(): void {
this.id=this.route.snapshot.params['id'];
this.http.get<{photo,stat}>(`https://www.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=f9736f4d370f9c7115a952951b506569&photo_id=${this.id}&format=json&nojsoncallback=1`,{
  observe:"events",
  reportProgress:true
}).subscribe((iDetailsRes)=>{
  console.log(iDetailsRes,"res2");
  if(iDetailsRes.type===HttpEventType.DownloadProgress){
        console.log(iDetailsRes.loaded)
        this.downloaded =true;
  }
  if(iDetailsRes.type===HttpEventType.Response){
    this.iDetails = iDetailsRes.body.photo;
  console.log(iDetailsRes.body,"idetailsRes")
  }
  

})
 this.pSer.getImages().subscribe((res)=>{
   let images = res.photos.photo;
   for(let i=0;i<images.length;i++){
    if(this.id===images[i].id){
        this.image = `https://farm${images[i].farm}.staticflickr.com/${images[i].server}/${images[i].id}_${images[i].secret}.jpg`
    }
   }
 })
}}
