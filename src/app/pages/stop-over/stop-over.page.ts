import { Component, OnInit, NgZone } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '@app/services/data.service';
import { StopOverLocationPage } from '@app/pages/stop-over-location/stop-over-location.page';
import { ModalController } from '@ionic/angular';
import { LocationService } from '@app/services/location.service';

@Component({
  selector: 'app-stop-over',
  templateUrl: './stop-over.page.html',
  styleUrls: ['./stop-over.page.scss'],
})
export class StopOverPage implements OnInit {

  public lat: any;
  public lng: any;
  public loc: any;
  public paramValue: any;
  constructor(private route: Router,
              public dataService: DataService,
              public locationService: LocationService,
              private activeRoute: ActivatedRoute,
              private modalCtrl: ModalController,
              private ngZone: NgZone) {

    this.activeRoute.params.subscribe(params => {
      this.paramValue = params.value;
      console.log(this.paramValue);
    });

  }

  ngOnInit() {
  }
  async goForStopovers(name) {
    this.locationService.resetCurrentLocation();
    const modal = await this.modalCtrl.create({
      component: StopOverLocationPage
    });
    await modal.present();
  }

  goForStopoversRouteMap() {
    let selectedStopovers = [];
    selectedStopovers = this.dataService.stopovers.filter(item => item.selected);
    this.route.navigate(['direction']);

  }

}
