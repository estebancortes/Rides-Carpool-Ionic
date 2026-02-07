import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RecommendedPricePage } from './recommended-price.page';

describe('RecommendedPricePage', () => {
  let component: RecommendedPricePage;
  let fixture: ComponentFixture<RecommendedPricePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecommendedPricePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RecommendedPricePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
