import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '@app/services/data.service';
import { environment } from '@env/environment';

@Component({
  selector: 'app-edit-ride',
  templateUrl: './edit-ride.page.html',
  styleUrls: ['./edit-ride.page.scss'],
})
export class EditRidePage implements OnInit {

  public editData: { head: string; route: string; }[];

  constructor(private route: Router,
              private dataService: DataService) {
    this.editData = environment.EDIT_RIDE;
  }

  ngOnInit() {
  }
  gotoPages(route) {
    this.dataService.journey = false;
    this.route.navigate([route]);
  }
  deleteRide() {
    this.route.navigate(['delete-ride']);
  }

}
