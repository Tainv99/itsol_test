import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Question} from '../model/question';
import { Observable } from 'rxjs';
import {QuestionService} from '../question.service';
import { Router } from '@angular/router';
import {QuestionData} from '../model/question-data';
import {UserService} from '../service/user.service';
@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  questions?: QuestionData[];
  total?: number;
  isCheck?: boolean;
  totalCorrect?: number;
  time = 30;

  constructor(private questionService: QuestionService, private router: Router,private userSerice: UserService ) {}

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData(): void {
      this.questionService.getQuestion().subscribe(data => {
        this.questions = data;
        this.total = this.questions.length;
        // this.countdown();
    });
  }

  countdown(): void {
    this.time--;
    if (this.time !== 0) {
      document.getElementById('dongho').innerHTML = String(this.time);
      setTimeout('countdown()', 1000);
    }
    else {
      document.getElementById('dongho').innerHTML = 'Het thoi gian nhe cac ban ';

    }
    this.isCheck = true;
    this.save();
      }


  checkAnswer(questionId: number, answerId: number, checked: any): void {
    let total = 0;
    this.questions.forEach(question => {
      if (question.id === questionId) {
        question.answerList.forEach(answer => {
          answer.checked = !!(answer.id === answerId && checked);
        });
      }
    });
    this.questions.forEach(question => {
      question.answerList.forEach(a => {
        if (a.checked) {
          total++;
        }
      });
    });
    this.isCheck = total === this.total;
  }

  save(): void {
    if (this.isCheck) {
      this.questionService.save(this.questions).subscribe(data => {
        this.questions = data.questions;
        this.totalCorrect = data.total;
        console.log(this.totalCorrect);
        this.updateMarkUser();
      });
      
    }
    
  }
  updateMarkUser() {
    this.userSerice.updateUser(this.totalCorrect)
      .subscribe(data => {
      }, error => console.log(error));
  }
}
