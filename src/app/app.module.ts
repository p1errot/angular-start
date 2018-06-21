import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { AuthorsComponent } from './authors/authors.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { CoursesService } from './courses.service';
import { AuthorsService } from './authors.service';
import { SummaryPipe } from './summary.pipe';
import { TitleCasePipe } from './title-case.pipe';
import { LikesComponent } from './likes/likes.component';
import { InputFormatDirective } from './input-format.directive';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { RestPostsComponent } from './rest-posts/rest-posts.component';
import { RestService } from './shared/rest.service';
import { AppErrorHandler } from './common/app-error-handler';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    AuthorsComponent,
    SummaryPipe,
    FavoriteComponent,
    TitleCasePipe,
    LikesComponent,
    InputFormatDirective,
    ContactFormComponent,
    SignupFormComponent,
    RestPostsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [
    RestService,
    CoursesService,
    AuthorsService,
    { provide: ErrorHandler, useClass: AppErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
