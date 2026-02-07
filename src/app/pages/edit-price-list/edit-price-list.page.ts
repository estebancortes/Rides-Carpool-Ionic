/**
 * Car Pool starter (https://store.enappd.com/product/carpool-app-starter-ionic)
 *
 * Copyright © 2019-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source tree.
 */
import { Component, OnInit } from '@angular/core';
import { DataService } from '@app/services/data.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { LocationService } from '@app/services/location.service';

@Component({
  selector: 'app-edit-price-list',
  templateUrl: './edit-price-list.page.html',
  styleUrls: ['./edit-price-list.page.scss'],
})
export class EditPriceListPage implements OnInit {

  public product = 100;
  public destination: any;
  public pickup: any;
  public priceEditList = [];
  public pickSub: any;
  public desSub: any;
  public priceValue = [];
  public stopOver: any;
  public stopOverLoc: any;
  constructor(public dataService: DataService,
              private route: Router,
              private toastCtrl: ToastController,
              public locationService: LocationService) {

    if (this.dataService.stopovers && this.dataService.stopovers.length) {
      this.priceEditList.push({
        pickup: this.dataService.stopovers[this.dataService.stopovers.length - 1].address,
        destination: this.locationService.dropAddress.value,
        model: 'stopoverToDest',
        placeholder: '$ 5000.00',
        price: 5000.00
      });
      if (this.dataService.stopovers.length > 1) {
        for (let i = 0; i < this.dataService.stopovers.length - 1; i++) {
          this.priceEditList.push({
            pickup: this.dataService.stopovers[i].address,
            destination: this.dataService.stopovers[i + 1].address,
            model: 'stopoverToDest',
            placeholder: '$ 5000.00',
            price: 5000.00
          });
        }
      }
      this.priceEditList.push({
        pickup: this.locationService.pickupAddress.value,
        destination: this.dataService.stopovers[0].address,
        model: 'stopoverToDest',
        placeholder: '$ 3000.00',
        price: 3000.00
      });
    } else {
      this.priceEditList = [{
        pickup: this.locationService.pickupAddress.value,
        destination: this.locationService.dropAddress.value,
        model: 'sourceToDest',
        placeholder: '$ 6000.00',
        price: 6000.00
      }];
    }

  }

  updateCart(type, index) {
    if (type === 'add') {
      this.priceEditList[index].price += 10;
      this.product += 500;
    }
    if (type === 'remove') {
      this.priceEditList[index].price -= 10;
      this.product -= 500;

    }
  }
  ngOnInit() {
  }

  async goToDrop() {
    if (this.dataService.journey) {
      this.route.navigate(['coming-back']);
    } else {
      const toast = await this.toastCtrl.create({
        message: 'Updated successfully',
        position: 'bottom',
        cssClass: 'toastBack',
        duration: 2000
      });
      toast.present();
      this.route.navigate(['/tabs/home']);
    }
  }

}
