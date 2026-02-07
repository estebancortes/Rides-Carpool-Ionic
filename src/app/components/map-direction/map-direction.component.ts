
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'map-direction',
  templateUrl: './map-direction.component.html',
  styleUrls: ['./map-direction.component.scss'],
})
export class MapDirectionComponent implements OnInit {

  public lat: any;
  public lng: any;
  @Input() public zoom: any;
  @Input() public origin: any;
  @Input() public destination: any;
  @Input() public markerOptions: any;
  @Input() public renderOptions: any;
  @Input() public stopovers: any;
  showMap = false;
  waypoints = [];
  pickupLocation: any;
  dropLocation: any;
  constructor() {
  }

  ngOnInit() {
    console.log(this.zoom);
    console.log(this.origin);
    console.log(this.destination);
    console.log(this.markerOptions);
    console.log(this.renderOptions);
    console.log(this.stopovers);

    this.lat = (this.origin.latitude + this.destination.latitude) / 2;
    this.lng = (this.origin.longitude + this.destination.longitude) / 2;

    if (this.origin && this.destination) {
      this.showMap = true;
      // this.waypoints =
    }
    this.stopovers.forEach(item => {
      this.waypoints.push({ location: { lat: item.latitude, lng: item.longitude } });
    });
    this.pickupLocation = { lat: this.origin.latitude, lng: this.origin.longitude };
    this.dropLocation = { lat: this.destination.latitude, lng: this.destination.longitude };
  }

}
