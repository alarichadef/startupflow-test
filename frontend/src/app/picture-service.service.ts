import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PictureServiceService {
  
  apiUrl = 'http://localhost:3000/picture';
  data: any;

  constructor(public http: HttpClient) {}


  getAllPictures() {
	  return new Promise(resolve => {
	    this.http.get(this.apiUrl)
	      .subscribe(data => {
          this.data = Array.of(data);
	        resolve(this.data);
	      });
	  });
	}
}
