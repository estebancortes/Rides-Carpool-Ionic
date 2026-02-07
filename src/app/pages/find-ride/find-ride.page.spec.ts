import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FindRidePage } from './find-ride.page';

describe('FindRidePage', () => {
  let component: FindRidePage;
  let fixture: ComponentFixture<FindRidePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindRidePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FindRidePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
