/// <reference types="@types/googlemaps" />
import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-picture-details',
  templateUrl: './picture-details.component.html',
  styleUrls: ['./picture-details.component.css']
})
export class PictureDetailsComponent implements OnInit {
  @ViewChild('gmap',{static: false}) gmapElement: any;
  map: google.maps.Map;

  constructor(public thisDialogRef: MatDialogRef<PictureDetailsComponent>, @Inject(MAT_DIALOG_DATA) public data: string) {}

  ngOnInit() {
    var mapProp = {
      center: new google.maps.LatLng(18.5793, 73.8143),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    setTimeout(() => {
      this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
    },200);
  }

}
