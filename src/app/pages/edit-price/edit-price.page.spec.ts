import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditPricePage } from './edit-price.page';

describe('EditPricePage', () => {
  let component: EditPricePage;
  let fixture: ComponentFixture<EditPricePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPricePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditPricePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
