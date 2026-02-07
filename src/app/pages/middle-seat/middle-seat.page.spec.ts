import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MiddleSeatPage } from './middle-seat.page';

describe('MiddleSeatPage', () => {
  let component: MiddleSeatPage;
  let fixture: ComponentFixture<MiddleSeatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiddleSeatPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MiddleSeatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
