import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FindRideSearchResultPage } from './find-ride-search-result.page';

describe('FindRideSearchResultPage', () => {
  let component: FindRideSearchResultPage;
  let fixture: ComponentFixture<FindRideSearchResultPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindRideSearchResultPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FindRideSearchResultPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
