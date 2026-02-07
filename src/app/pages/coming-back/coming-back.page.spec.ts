import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ComingBackPage } from './coming-back.page';

describe('ComingBackPage', () => {
  let component: ComingBackPage;
  let fixture: ComponentFixture<ComingBackPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComingBackPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ComingBackPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
