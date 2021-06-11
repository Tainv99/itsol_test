import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Anwser } from '../model/anwser';
import { Question } from '../model/question';
import { QuestionService } from '../question.service';
import {
  Validators,
  FormControl
} from '@angular/forms';
@Component({
  selector: 'app-create-question',
  templateUrl: './create-question.component.html',
  styleUrls: ['./create-question.component.css']
})
export class CreateQuestionComponent implements OnInit {
  questionForm: FormGroup;
  myQuestionObjData: any;
  question: Question = new Question();
  idQ: number;
  submitted = false;
  // ans: Anwser = new Anwser('',this.idQ);
  ans:Anwser[];
  constructor(private questionService: QuestionService,private fb: FormBuilder) { }
  ngOnInit() {
    this.myQuestionObjData = {
      text: '',
      answerList: [
        {
          textanwser: ''
        },
        {
          textnwser: ''
        },
        {
          textnwser: ''
        },
        {
          textnwser: ''
        }
      ]
    };

    this.questionForm = this.fb.group({
      text: new FormControl('', []),
      answerList: this.fb.array([]),
    });

    this.patchValueObjToForm();
  }
  // addAnswer() {
  //   const control = <FormArray>this.questionForm.get('anwserDTOList');
  //   control.push(
  //     this.fb.group({
  //       textanswer: []
  //     })
  //   );
  // }
  save() {
    this.questionService
      .createQuestion(this.questionForm.value).subscribe(data => {
        
      },
        error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }
  patchValueObjToForm() {
    // Cau hoi
    this.questionForm.patchValue({ text: this.myQuestionObjData.text });

    // DS cau tra loi answersDTOList
    const control = <FormArray>this.questionForm.get('answerList');
    this.myQuestionObjData.answerList.forEach(x => {
      control.push(this.patchAnswersDTOListValue(x.textanwser));
    });
  }

  patchAnswersDTOListValue(textanwser) {
    return this.fb.group({
      textanwser: [textanwser]
    });
  }
}
