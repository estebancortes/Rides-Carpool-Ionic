
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '@app/services/data.service';

@Component({
  selector: 'app-book-instantly',
  templateUrl: './book-instantly.page.html',
  styleUrls: ['./book-instantly.page.scss'],
})
export class BookInstantlyPage implements OnInit {

  public book = 'Quieres que los pasajeros tomen el servicio de forma automatica?';
  constructor(private route: Router, public dataService: DataService) { }

  ngOnInit() {
  }
  gotoPrice(status) {
    this.dataService.rideDirection === 'onward' ?
      this.dataService.onwardRideDetails.instantBook = status :
      this.dataService.returnRideDetails.instantBook = status;
    this.route.navigate(['recommended-price']);

  }

}
