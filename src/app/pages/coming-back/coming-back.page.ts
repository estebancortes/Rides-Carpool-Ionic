
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '@app/services/data.service';

@Component({
  selector: 'app-coming-back',
  templateUrl: './coming-back.page.html',
  styleUrls: ['./coming-back.page.scss'],
})
export class ComingBackPage implements OnInit {
  public comingBack = 'Piensas volver? Publica tu viaje de vuelta ya!';
  public subheader = 'Solo dinos cuando volveras y listo';
  public confirmImage = 'assets/image/a.jpg';
  constructor(private route: Router, public dataService: DataService) { }
  ngOnInit() {
  }
  goForReturnRide() {
    this.dataService.rideDirection = 'return';
    this.route.navigate(['calendar', { value: 'returnTrip' }]);
  }
  goForThanks() {
    this.route.navigate(['add-return-description']);
  }

}
