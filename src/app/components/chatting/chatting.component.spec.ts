import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChattingComponent } from './chatting.component';

describe('ChattingComponent', () => {
  let component: ChattingComponent;
  let fixture: ComponentFixture<ChattingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChattingComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChattingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
