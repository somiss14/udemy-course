import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  styles: [`
    h2 {
      color: cadetblue;
    }`]
})
export class AppComponent {
  name = 'maciek';
}
