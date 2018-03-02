import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { AuthorsComponent } from './authors/authors.component';
import { LikesComponent } from './likes/likes.component';
import { FavoriteComponent } from './favorite/favorite.component';

import { SummaryPipe } from './summary.pipe';
import { TitleCasePipe } from './title-case.pipe';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { CoursesService } from './courses.service';
import { AuthorsService } from './authors.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        CoursesComponent,
        AuthorsComponent,
        LikesComponent,
        FavoriteComponent,
        SummaryPipe,
        TitleCasePipe
      ],
      imports: [
        BrowserModule,
        FormsModule
      ],
      providers: [
        CoursesService,
        AuthorsService
      ]
    }).compileComponents();
  }));
  xit('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  xit(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
  xit('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  }));
});
