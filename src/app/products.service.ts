import { HttpClient,HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { image } from "./image.model";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }
  getImages(){
    return this.http.get<{photos:{photo:image[]}}>('https://www.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=f9736f4d370f9c7115a952951b506569&gallery_id=66911286-72157647277042064&format=json&nojsoncallback=1',{
      params:new HttpParams().set('print','pretty')
    })
  }
  
}
