import { Component, OnInit } from '@angular/core';

import { ListenerService } from './listener.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'mfe-one';

  constructor(
    private listenerService: ListenerService
  ) {}

  ngOnInit() {
    this.initIframeCommunication();
    this.listenerService.initListener();
  }

  initIframeCommunication() {
    const msg = {
      action: 'init-iframe'
    };
    window.parent.postMessage(msg, '*');
  }

  enviaMsg() {
    const msg = {
      action: 'endpoint',
      endpoint: 'www.123.com'
    }
    this.listenerService.sendMessage(msg);
  }

}
