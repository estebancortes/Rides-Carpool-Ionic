import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CheckBookingPage } from './check-booking.page';

describe('CheckBookingPage', () => {
  let component: CheckBookingPage;
  let fixture: ComponentFixture<CheckBookingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckBookingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CheckBookingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
