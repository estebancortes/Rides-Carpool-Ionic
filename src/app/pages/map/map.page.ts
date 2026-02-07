import { MouseEvent } from '@agm/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '@app/services/data.service';
@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {

  constructor(private actvRouter: ActivatedRoute, private service: DataService, private route: Router) {
    this.actvRouter.params.subscribe(params => {
      this.comingFrom = params.value;
    });
  }
  markers = [];
  public dropLat: any;
  public dropLng: any;
  public pickupLat: any;
  public pickupLng: any;
  zoom = 8;
  address: any;
  comingFrom: any;
  public markerOptions = {
    origin: {
      animation: '\'DROP\'',
      label: 'origin',

    },
    destination: {
      animation: '\'DROP\'',
      label: 'destination',

    },
  };
  public renderOptions = {
    suppressMarkers: true,
  };


  ngOnInit() {
  }
  clickedMarker(label: string, index: number) {
  }

  mapClicked($event: MouseEvent) {
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true
    });
  }


  goToDrop() {
    if (this.comingFrom === 'pickup') {
      this.route.navigate(['drop-off']);
    } else if (this.comingFrom === 'drop') {
      this.route.navigate(['stop-over']);
    }
  }

}
interface Marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}
