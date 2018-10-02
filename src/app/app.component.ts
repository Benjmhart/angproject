import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  events: { label: string; value: number }[] = [];
  title = 'angproject';

  handleGameEvent(event: { value: number }) {
    if (event.value % 2 === 0) {
      this.events = [{ label: 'EVEN', value: event.value }].concat(this.events);
    } else {
      this.events = [{ label: 'ODD', value: event.value }].concat(this.events);
    }

    console.log(this.events);
  }
}
