import { Component } from '@angular/core';
import { Quiz } from '../types.interface';
import { NgFor } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-results',
  standalone: true,
  imports: [NgFor],
  templateUrl: './results.component.html',
  styleUrl: './results.component.scss'
})
export class ResultsComponent {
  quizResults!: Quiz;
  quizScore: number = 0;
  timeTaken!: string;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.quizResults = history.state.quiz_results;
    if (this.quizResults != undefined) {
      const timeDiff = new Date(history.state.timeEnded - history.state.timeStarted);
      this.timeTaken = `${timeDiff.getMinutes()}:${timeDiff.getSeconds()}`;
      this.quizResults.questions.map((question) => {
        if (question.selected_answer == question.correct_answer) {
          this.quizScore = this.quizScore + 1;
        }
      })
    }
  }

  public getHtml(texto: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(texto);
  }
}
