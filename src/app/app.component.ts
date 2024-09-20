import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { QuizListComponent } from './quiz-list/quiz-list.component';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, QuizListComponent, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'nerdysoft-front-end-task';
}
