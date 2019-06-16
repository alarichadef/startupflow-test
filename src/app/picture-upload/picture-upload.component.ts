import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-picture-upload',
  templateUrl: './picture-upload.component.html',
  styleUrls: ['./picture-upload.component.css']
})
export class PictureUploadComponent implements OnInit {
  selectedPicture = null;
  SERVER_URL = "http://localhost:3000/upload";
  uploadForm: FormGroup;  

  constructor( private httpClient: HttpClient) { }

  ngOnInit() {
  }

  onPictureSelected(event) {
    console.log(event);
    this.selectedPicture = event.target.files[0];
  }

  onSubmit(){

  }

}
