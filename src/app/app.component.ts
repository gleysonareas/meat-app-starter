import { Component } from '@angular/core';

@Component({
  selector: 'mt-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'meat-app-starter';
  content = 'Welcome do Meat App!'

  constructor() { }

  ngOnInit() {
  }
}
