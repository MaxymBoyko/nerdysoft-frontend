import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { Quiz } from '../types.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-quiz-list',
  standalone: true,
  imports: [NgFor, NgIf, RouterLink],
  templateUrl: './quiz-list.component.html',
  styleUrl: './quiz-list.component.scss'
})
export class QuizListComponent {
  quizes: Quiz[] = [
    {
      name: "General Knowledge",
      category: 9,
      amountQuestions: 10,
      questions: [],
    },
    {
      name: "Entertainment: Books",
      category: 10,
      amountQuestions: 20,
      questions: [],
    },
    {
      name: "Science: Computers",
      category: 18,
      amountQuestions: 15,
      questions: [],
    },
    {
      name: "Entertainment: Film",
      category: 11,
      amountQuestions: 10,
      questions: [],
    },
    {
      name: "Entertainment: Music",
      category: 12,
      amountQuestions: 10,
      questions: [],
    },
    {
      name: "Entertainment: Television",
      category: 14,
      amountQuestions: 10,
      questions: [],
    },
    {
      name: "Entertainment: Video Games",
      category: 15,
      amountQuestions: 10,
      questions: [],
    },
    {
      name: "Entertainment: Board Games",
      category: 16,
      amountQuestions: 10,
      questions: [],
    },
    {
      name: "Science & Nature",
      category: 17,
      amountQuestions: 10,
      questions: [],
    },
    {
      name: "Science: Mathematics",
      category: 19,
      amountQuestions: 10,
      questions: [],
    },
  ];

  constructor() {}

}
