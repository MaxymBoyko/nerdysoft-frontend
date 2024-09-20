import { Routes } from '@angular/router';
import { QuizListComponent } from './quiz-list/quiz-list.component';
import { PlayComponent } from './play/play.component';
import { ResultsComponent } from './results/results.component';

export const routes: Routes = [
    {path: '', component: QuizListComponent},
    {path: 'play', component: PlayComponent},
    {path: 'play/results', component: ResultsComponent}
];
