import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'no server was created!';
  serverName = '';
  serverCreated = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 1000);
  }

  ngOnInit() {}

  onCreateServer() {
    console.log('S34V34');
    this.serverCreationStatus = 'server was created, name is: ' + this.serverName;
    this.serverCreated = true;
  }

  /* onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  } */
}
