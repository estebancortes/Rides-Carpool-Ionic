import { Component, OnInit } from '@angular/core';
import { DataService } from '@app/services/data.service';
import { environment } from '@env/environment';

@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.page.html',
  styleUrls: ['./preferences.page.scss'],
})
export class PreferencesPage implements OnInit {

  preferenceData: any;
  public selectVal;
  customPopoverOptions: any = {
  };
  constructor(public service: DataService) {
    this.preferenceData = environment.PREFERENCE;
  }

  ngOnInit() {
  }


}
