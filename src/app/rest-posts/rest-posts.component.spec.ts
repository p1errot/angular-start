import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestPostsComponent } from './rest-posts.component';

describe('RestPostsComponent', () => {
  let component: RestPostsComponent;
  let fixture: ComponentFixture<RestPostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestPostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
