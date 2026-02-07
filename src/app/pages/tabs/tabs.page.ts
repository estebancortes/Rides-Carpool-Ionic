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
import { environment } from '@env/environment';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  public tabRoutes: any;
  public clicked = 'Rides';
  constructor(public dataService: DataService) {
    this.tabRoutes = environment.TAB_ROUTING;
  }

  ngOnInit() {
  }
  showTabLabel(tab) {
    this.clicked = tab.label;
    this.dataService.currentTab = tab.tab;
    if (tab.tab === 'find-ride') {
      this.dataService.rideType = 'find';
    }
    if (tab.tab === 'offer') {
      this.dataService.rideType = 'offer';
    }
    console.log('current tab', this.dataService.currentTab);
  }

}
