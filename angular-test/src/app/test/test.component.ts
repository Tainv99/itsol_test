import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from '../model/question';
import {Test} from '../model/test';
import { QuestionService } from '../question.service';
import {TestService} from '../service/test.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  test: Observable<Test[]>;
  q: Observable<Question[]>;
  constructor(private testService: TestService,private qService: QuestionService) {}

  ngOnInit() {
    this.reloadData();
    this.reloadQuestion();
  }

  reloadData() {
    this.testService.getTest().subscribe(data => {
      this.test = data;
      console.log(data);
  });
  }
  reloadQuestion() {
    this.qService.getQuestion().subscribe(data => {
      this.q = data;
      console.log(data);
  });
  }
}
