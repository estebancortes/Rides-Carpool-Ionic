import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddReturnDescriptionPage } from './add-return-description.page';

describe('AddReturnDescriptionPage', () => {
  let component: AddReturnDescriptionPage;
  let fixture: ComponentFixture<AddReturnDescriptionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddReturnDescriptionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddReturnDescriptionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
