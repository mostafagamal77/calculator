import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'calculator';

  result: string = '';

  getAction(item: any) {
    this.result += item;
  }

  getResult() {
    if (this.result) {
      try {
        this.result = eval(this.result).toFixed(2);
      } catch (error) {
        console.log('');
      }
    }
  }

  clearResults() {
    this.result = '';
  }

  deleteNumber() {
    if (this.result) {
      this.result = this.result.substring(0, this.result.length - 1);
    }
  }
}
