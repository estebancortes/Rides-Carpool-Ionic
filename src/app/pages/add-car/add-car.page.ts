
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { environment } from '@env/environment';
import { FirebaseService, Vehicle } from '../../services/firebase.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.page.html',
  styleUrls: ['./add-car.page.scss'],
})
export class AddCarPage implements OnInit {

  vehicles$: Observable<Vehicle[]>;

  constructor(
    public modalCtrl: ModalController,
    private route: Router,
    public firebaseService:FirebaseService) { }
  // public data = environment.CAR_DATA;

  vehicles:any = [];

  ngOnInit() {
    this.firebaseService.getCurrentUser().subscribe((user:any) => {

      this.firebaseService.getVehiclesList(user.uid).subscribe(data=>{
        console.log("Vehicles : ", user.uid, data);
        this.vehicles = data;
      })
    });
  }

  openpageTRansition() {
    this.route.navigate(['add-new-vehicle']);
  }

}
