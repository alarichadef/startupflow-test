import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { PicturesListComponent } from '../pictures-list/pictures-list.component'
import {MatFormFieldModule, MatInputModule} from '@angular/material';

@Component({
  selector: 'app-picture-upload',
  templateUrl: './picture-upload.component.html',
  styleUrls: ['./picture-upload.component.css'],
  providers: [PicturesListComponent ]
})
export class PictureUploadComponent implements OnInit {
  selectedPicture: File = null;
  SERVER_URL = "http://localhost:3000/upload";
  uploadPicture = new FormGroup({
    picture: new FormControl('', [Validators.required]),
    latitude: new FormControl('', [Validators.required]),
    longitude: new FormControl('', [Validators.required])
  }, {validators : Validators.required});  

  constructor( private httpClient: HttpClient, private PicturesList: PicturesListComponent) {}

  ngOnInit() {
  }

  onPictureSelected(event) {
    this.selectedPicture = event.target.files[0];
  }

  onSubmit(){
    const fd = new FormData();
    fd.append('picture', this.selectedPicture,'picture');
    fd.append('longitude', JSON.stringify(this.uploadPicture.get('longitude').value));
    fd.append('latitude', JSON.stringify(this.uploadPicture.get('latitude').value));
    this.httpClient.post('http://localhost:3000/',fd).subscribe(res => {
      this.PicturesList.getDetailPicture(res,true);
      this.PicturesList.ngOnInit();
    });
  }

}
