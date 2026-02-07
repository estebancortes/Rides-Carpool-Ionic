import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StopOverLocationPage } from './stop-over-location.page';

describe('StopOverLocationPage', () => {
  let component: StopOverLocationPage;
  let fixture: ComponentFixture<StopOverLocationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StopOverLocationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StopOverLocationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
