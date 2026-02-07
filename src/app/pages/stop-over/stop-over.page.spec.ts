import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StopOverPage } from './stop-over.page';

describe('StopOverPage', () => {
  let component: StopOverPage;
  let fixture: ComponentFixture<StopOverPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StopOverPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StopOverPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
