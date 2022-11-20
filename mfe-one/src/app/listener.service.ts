import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListenerService {

  constructor() { }

  initListener() {
    this.receiveMessage();
  }

  receiveMessage() {
    window.addEventListener("message", (msg) => {
      console.log("Mensagem recebida da aplicacao pai: ", msg.data);
   }, false)   
  }

  sendMessage(msg: any) {
    window.parent.postMessage(msg, "*");
  }
}
