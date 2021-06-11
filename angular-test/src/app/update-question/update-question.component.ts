import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Anwser } from '../model/anwser';
import { Question } from '../model/question';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-update-question',
  templateUrl: './update-question.component.html',
  styleUrls: ['./update-question.component.css']
})
export class UpdateQuestionComponent implements OnInit {
  questionForm: FormGroup;
  myQuestionObjData: any;
  question: Question = new Question();
  //question:QuestionData[];
  idQ: number;
  id:number;
  submitted = false;
  // ans: Anwser = new Anwser('',this.idQ);
  ans:Anwser[];
  constructor(private questionService: QuestionService,private fb: FormBuilder,private route: ActivatedRoute) { }
  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.questionService.getQuestionAnwserById(this.id)
      .subscribe(data => {
        this.question=data
        console.log(data);
      }, error => console.log(error));
    this.myQuestionObjData = {
      text: '',
      answerList: [
        {
         
          textanwser: '',
          id:'95'
        },
        {
         
          textnwser: '',
          id:'96'
        },
        {
          
          textnwser: '',
          id:'97'
        },
        {
          
          textnwser: '',
          id:'98'
        }
      ]
    };

    this.questionForm = this.fb.group({
      text: new FormControl('', []),
      answerList: this.fb.array([]),
    });

    this.patchValueObjToForm();
  }

  updateQuestion() {
    this.questionService.updateQuestion(this.id,this.questionForm.value)
      .subscribe(data => {
        console.log(data);
      }, error => console.log(error));
  }
  onSubmit() {
    this.submitted = true;
    this.updateQuestion();
  }
  patchValueObjToForm() {
    // Cau hoi
    this.questionForm.patchValue({ text: this.myQuestionObjData.text });

    // DS cau tra loi answersDTOList
    const control = <FormArray>this.questionForm.get('answerList');
    this.myQuestionObjData.answerList.forEach(x => {
      control.push(this.patchAnswersDTOListValue(x.textanwser,x.id));
    });
  }

  patchAnswersDTOListValue(textanwser,id) {
    return this.fb.group({
      textanwser: [textanwser],
      id: [id]
    });
  }
}
