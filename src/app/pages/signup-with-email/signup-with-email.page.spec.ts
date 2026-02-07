import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SignupWithEmailPage } from './signup-with-email.page';

describe('SignupWithEmailPage', () => {
  let component: SignupWithEmailPage;
  let fixture: ComponentFixture<SignupWithEmailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupWithEmailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SignupWithEmailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
