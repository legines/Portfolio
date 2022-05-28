import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';
  urls = ['./assets/ended.png', './assets/cov-api.png', './assets/gp.png', './assets/hangman.png'];
}
