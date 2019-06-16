/// <reference types="@types/googlemaps" />
import { Component, OnInit, ViewChild } from '@angular/core';
import { PictureDetailsComponent } from '../picture-details/picture-details.component'
import { Picture } from '../picture';
import {MatDialog} from '@angular/material';


@Component({
  selector: 'app-pictures-list',
  templateUrl: './pictures-list.component.html',
  styleUrls: ['./pictures-list.component.css']
})
export class PicturesListComponent implements OnInit {
  @ViewChild('gmap',{static: false}) gmapElement: any;
  map: google.maps.Map;

  pictures: Picture[] = [
    { 
      id: 1,
      date: new Date(),
      url: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
      longitude: 40,
      latitude: 30
    },
    { 
      id: 5,
      date: new Date(),
      url: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      longitude: 40,
      latitude: 30
    }
  ];
  selectedPicture: Picture;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    this.getPictures();
  }

  getPictures() {
    console.log('GetPictures()');
  }
  openDialog() {
    const dialogRef = this.dialog.open(PictureDetailsComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  getDetailPicture(picture: any) {
    this.selectedPicture = picture;
    // let mapProp = {
    //   center: new google.maps.LatLng(18.5793, 73.8143),
    //   zoom: 15,
    //   mapTypeId: google.maps.MapTypeId.ROADMAP
    // };
    // this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
    const dialogRef = this.dialog.open(PictureDetailsComponent, {
      width: '600px',
      data:picture
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });

    console.log('click : picture', picture);
  }
}
