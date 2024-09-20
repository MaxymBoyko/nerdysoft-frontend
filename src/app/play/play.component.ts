import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, RouterLink } from '@angular/router';
import { QuizService } from '../quiz-list/quiz.service';
import { Quiz } from '../types.interface';
import { NgFor, NgIf } from '@angular/common';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';


@Component({
  selector: 'app-play',
  standalone: true,
  imports: [NgFor, NgIf, FormsModule, ReactiveFormsModule, RouterLink],
  templateUrl: './play.component.html',
  styleUrl: './play.component.scss'
})
export class PlayComponent implements OnInit {
  quiz: Quiz = {
    name: '',
    category: 0,
    amountQuestions: 0,
    questions: []
  };
  query!: Params;
  timeStarted = new Date();
  timeEnded!: Date;

  constructor(private route: ActivatedRoute, private quizService: QuizService, private fb: FormBuilder, private sanitizer: DomSanitizer) {}

  form = this.fb.group({
    answer: ['', {updateOn: "change"}]
  })

  get myForm() {
    return this.form.get('answer');
  }

  onChange(questionId: number) {
    if (!this.form.valid) {
      return false;
    } else if(this.form.value.answer) {
      this.quiz.questions[questionId].selected_answer = this.form.value.answer;
    }
    return true;
  }

  onClick(): void {
    this.timeEnded = new Date;
    console.log(this.timeEnded)
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(
      params => this.query = params
    );
   
    this.quizService.getQuestions(this.query['amount'], this.query['category'])
    .subscribe((response) => {
      if (response.results.length != 0) {
        this.quiz.name = response.results[0].category;
        this.quiz.amountQuestions = Number(this.query['amount']);
        this.quiz.category = Number(this.query['category']);
        response.results.map((result) => {
          this.quiz.questions.push({
            type: result.type,
            difficulty: result.difficulty,
            category: result.category,
            question: result.question,
            answers: result.incorrect_answers.concat(result.correct_answer).sort(() => Math.random() - 0.5),
            correct_answer: result.correct_answer,
            selected_answer: '',
          })
        });
      }
    },
    (error) => {
      console.error('Error:', error);
    });      
  }

  public getHtml(texto: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(texto);
  }
}
