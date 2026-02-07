import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TotalPassengersPage } from './total-passengers.page';

describe('TotalPassengersPage', () => {
  let component: TotalPassengersPage;
  let fixture: ComponentFixture<TotalPassengersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalPassengersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TotalPassengersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
