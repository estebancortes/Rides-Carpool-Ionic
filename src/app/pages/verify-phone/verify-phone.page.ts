import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '@app/services/data.service';
import { environment } from '@env/environment';
@Component({
  selector: 'app-verify-phone',
  templateUrl: './verify-phone.page.html',
  styleUrls: ['./verify-phone.page.scss'],
})
export class VerifyPhonePage implements OnInit {

  public customPopoverOptions: any = {
  };
  private data: { 'name': string; 'dial_code': string; 'code': string; }[];
  public selectedValue: any = '';
  public inputValue: any = 1233253245;
  public phoneNumber: any;
  public countryCode: { 'name': string; 'dial_code': string; 'code': string; }[];

  constructor(
    private route: Router,
    public service: DataService
  ) {
    this.countryCode = environment.COUNTRIES;
  }

  ngOnInit() {
  }

  gotVerification(input: any, selected: any) {
    this.phoneNumber = selected + input;
    this.route.navigate(['phone-verification', { selected, input }]);
  }

}
