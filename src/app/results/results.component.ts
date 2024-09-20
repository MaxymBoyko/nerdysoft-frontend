import { Component } from '@angular/core';
import { Quiz } from '../types.interface';
import { NgFor } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Router } from '@angular/router';

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

  constructor(private sanitizer: DomSanitizer, private router: Router) {}

  ngOnInit(): void {
    this.quizResults = history.state.quiz_results;
    if (history.state.quiz_results == undefined) {
      this.router.navigateByUrl('');
    } else {
      const timeDiff = new Date(history.state.timeEnded - history.state.timeStarted);
      this.timeTaken = `${timeDiff.getMinutes()}:${timeDiff.getSeconds()}`;
      this.quizResults.questions.map((question) => {
        if (question.selected_answer == question.correct_answer) {
          this.quizScore = this.quizScore + 1;
        }
      });
    }
  }

  public getHtml(texto: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(texto);
  }
}
