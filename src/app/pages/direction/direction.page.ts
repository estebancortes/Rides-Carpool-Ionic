
import { Component, OnInit } from '@angular/core';
import { DataService } from '@app/services/data.service';
import { MouseEvent } from '@agm/core';
import { Router } from '@angular/router';
import { environment } from '@env/environment';
import { LocationService } from '@app/services/location.service';

@Component({
  selector: 'app-direction',
  templateUrl: './direction.page.html',
  styleUrls: ['./direction.page.scss'],
})
export class DirectionPage implements OnInit {

  constructor(public dataService: DataService,
              public locationService: LocationService,
              private route: Router) {
  }
  header = 'This is the most popular place to stop here';
  public zoom = 8;
  public markers = [];
  public markerOptions = environment.MARK_OPTIONS;
  public renderOptions = {
    suppressMarkers: true,
  };

  ngOnInit() {
  }
  clickedMarker(label: string, index: number) {
  }
  markerDragEnd(m: Marker, $event: MouseEvent) {
  }
  mapClicked($event: MouseEvent) {
    // this.markers.push({
    //   lat: $event.coords.lat,
    //   lng: $event.coords.lng,
    //   draggable: true
    // });
  }
  goForDate() {
    this.route.navigate(['calendar', { value: 'oneWay' }]);
  }

}
interface Marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}
