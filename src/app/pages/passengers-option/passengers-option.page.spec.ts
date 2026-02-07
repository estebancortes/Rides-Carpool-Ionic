import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PassengersOptionPage } from './passengers-option.page';

describe('PassengersOptionPage', () => {
  let component: PassengersOptionPage;
  let fixture: ComponentFixture<PassengersOptionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassengersOptionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PassengersOptionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
