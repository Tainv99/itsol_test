import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DetailQuestionComponent} from './detail-question/detail-question.component';
import {QuestionComponent} from './question/question.component';
import {AnwserComponent} from './anwser/anwser.component';
import { CreateQuestionComponent } from './create-question/create-question.component';
import { TestComponent } from './test/test.component';
import { ListQuestionComponent } from './list-question/list-question.component';
import { UpdateQuestionComponent } from './update-question/update-question.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  { path: 'detail', component:  DetailQuestionComponent},
  { path: 'question', component:  QuestionComponent},
  { path: 'ans', component:  AnwserComponent},
  { path: 'create', component: CreateQuestionComponent },
  { path: 'test', component: TestComponent },
  { path: 'list-question', component: ListQuestionComponent },
  { path: 'update/:id', component: UpdateQuestionComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
