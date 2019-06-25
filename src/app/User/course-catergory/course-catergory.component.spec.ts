import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseCatergoryComponent } from './course-catergory.component';

describe('CourseCatergoryComponent', () => {
  let component: CourseCatergoryComponent;
  let fixture: ComponentFixture<CourseCatergoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseCatergoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseCatergoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
