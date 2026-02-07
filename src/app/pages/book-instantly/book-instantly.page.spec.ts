import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BookInstantlyPage } from './book-instantly.page';

describe('BookInstantlyPage', () => {
  let component: BookInstantlyPage;
  let fixture: ComponentFixture<BookInstantlyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookInstantlyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BookInstantlyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
