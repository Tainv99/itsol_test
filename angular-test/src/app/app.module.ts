import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';;

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailQuestionComponent } from './detail-question/detail-question.component';
import { QuestionComponent } from './question/question.component';
import { AnwserComponent } from './anwser/anwser.component';
import { CreateQuestionComponent } from './create-question/create-question.component';
import { TestComponent } from './test/test.component';
import { ListQuestionComponent } from './list-question/list-question.component';
import { UpdateQuestionComponent } from './update-question/update-question.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailQuestionComponent,
    QuestionComponent,
    AnwserComponent,
    CreateQuestionComponent,
    TestComponent,
    ListQuestionComponent,
    UpdateQuestionComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
