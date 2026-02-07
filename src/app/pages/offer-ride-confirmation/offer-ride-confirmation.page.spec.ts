import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OfferRideConfirmationPage } from './offer-ride-confirmation.page';

describe('OfferRideConfirmationPage', () => {
  let component: OfferRideConfirmationPage;
  let fixture: ComponentFixture<OfferRideConfirmationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfferRideConfirmationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OfferRideConfirmationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
