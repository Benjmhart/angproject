import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  gameRunning = false;
  @Output()
  gameEvent = new EventEmitter();
  constructor() {
    setInterval(() => {
      this.gameRunning && this.gameEvent.emit({ value: Math.floor(Math.random() * 100) });
    }, 1000);
  }

  ngOnInit() {}
  onGameStart() {
    this.gameRunning = true;
  }
  onGamePause() {
    this.gameRunning = false;
  }
}
