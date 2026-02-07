import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DeleteRidePage } from './delete-ride.page';

describe('DeleteRidePage', () => {
  let component: DeleteRidePage;
  let fixture: ComponentFixture<DeleteRidePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteRidePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DeleteRidePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
