import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditPriceListPage } from './edit-price-list.page';

describe('EditPriceListPage', () => {
  let component: EditPriceListPage;
  let fixture: ComponentFixture<EditPriceListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPriceListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditPriceListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
