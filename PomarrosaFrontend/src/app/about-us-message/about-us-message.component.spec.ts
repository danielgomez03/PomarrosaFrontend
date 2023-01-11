import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsMessageComponent } from './about-us-message.component';

describe('AboutUsMessageComponent', () => {
  let component: AboutUsMessageComponent;
  let fixture: ComponentFixture<AboutUsMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutUsMessageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutUsMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
