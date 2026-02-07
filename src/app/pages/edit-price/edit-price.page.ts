
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-price',
  templateUrl: './edit-price.page.html',
  styleUrls: ['./edit-price.page.scss'],
})
export class EditPricePage implements OnInit {

  public header = 'Por que no intentas usar nuestro precio sugerido?';
  public description = '';
  constructor(private route: Router) { }

  ngOnInit() {
  }
  gotoeditAmount() {
    this.route.navigate(['edit-price-list']);
  }
}
