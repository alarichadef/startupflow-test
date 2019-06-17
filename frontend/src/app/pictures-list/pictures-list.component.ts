/// <reference types="@types/googlemaps" />
import { Component, OnInit, ViewChild, ChangeDetectorRef,} from '@angular/core';
import { PictureDetailsComponent } from '../picture-details/picture-details.component'
import { Picture } from '../picture';
import {MatDialog} from '@angular/material';
import { PictureServiceService } from '../picture-service.service';
import {DomSanitizer} from '@angular/platform-browser';


@Component({
  selector: 'app-pictures-list',
  templateUrl: './pictures-list.component.html',
  styleUrls: ['./pictures-list.component.css']
})
export class PicturesListComponent implements OnInit {
  @ViewChild('gmap',{static: false}) gmapElement: any;
  map: google.maps.Map;

  pictures: any;
  selectedPicture: Picture;

  constructor(public dialog: MatDialog, public pictureService: PictureServiceService, public cd : ChangeDetectorRef, public _DomSanitizer: DomSanitizer) { 
  }
  
  ngOnInit() {
    this.getPictures();
  }

  getPictures() {
    this.pictureService.getAllPictures().then(data => {
      this.pictures = data[0];
    });
    return 0;
    
  }

  getDetailPicture(picture: any, reload?: boolean) {
    this.selectedPicture = picture;
    const dialogRef = this.dialog.open(PictureDetailsComponent, {
      width: '600px',
      data:this.selectedPicture
    });
    dialogRef.afterClosed().subscribe(result => {
      if(reload) location.reload();
    });
  }
}
