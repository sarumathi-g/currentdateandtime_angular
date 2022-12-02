import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CURRENT DATE AND TIME';
  // current_date:Date = new Date();
  date2: String= new Date().toLocaleDateString();
  time2: String=new Date().toLocaleTimeString();
}
