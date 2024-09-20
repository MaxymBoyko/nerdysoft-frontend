import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Question, Result } from '../types.interface';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private baseUrl = 'https://opentdb.com/api.php';

  constructor(private http: HttpClient) { }

  getQuestions(amount: number, category: number): Observable<Result> {
    return this.http.get<Result>(`${this.baseUrl}?amount=${amount}&category=${category}`)
    .pipe(
      catchError((error: any) => {
        console.error('An error occured:', error);
        return throwError('Something wrong.');
      })
    );
  }
}
