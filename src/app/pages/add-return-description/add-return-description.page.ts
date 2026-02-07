import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '@app/services/data.service';

@Component({
  selector: 'app-add-return-description',
  templateUrl: './add-return-description.page.html',
  styleUrls: ['./add-return-description.page.scss'],
})
export class AddReturnDescriptionPage implements OnInit {

  public head = 'Algo que quieras agregar a tu oferta?';
  public placeholder = 'Hola, tengo clases durante la noche y tengo varios cupos, avisame si necesitas un cupo!';
  public returnDesc = '';
  constructor(private route: Router, public dataService: DataService) { }

  ngOnInit() {
  }
  rideSuccess() {
    this.dataService.returnRideDetails.description = this.returnDesc;
    this.route.navigate(['offer-ride-confirmation']);
  }

}
