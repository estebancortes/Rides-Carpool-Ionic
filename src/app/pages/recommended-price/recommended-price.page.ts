
import { Component, OnInit } from '@angular/core';
import { DataService } from '@app/services/data.service';
import { Router } from '@angular/router';
import { LocationService } from '@app/services/location.service';
@Component({
  selector: 'app-recommended-price',
  templateUrl: './recommended-price.page.html',
  styleUrls: ['./recommended-price.page.scss'],
})
export class RecommendedPricePage implements OnInit {

  public headerText = 'Este es nuestro precio recomendado, esta bien para ti?';
  public pickup: any;
  public destination: any;
  constructor(public dataService: DataService,
              private route: Router,
              public locationService: LocationService) {
  }

  ngOnInit() {
  }
  askForReturn() {
    console.log(this.dataService.rideDirection);
    this.dataService.rideDirection === 'onward' ?
      this.route.navigate(['coming-back']) :
      this.route.navigate(['add-return-description']);
  }
  notAgree() {
    this.route.navigate(['edit-price']);
  }

}
