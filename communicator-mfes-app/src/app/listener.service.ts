import { Injectable, ElementRef } from '@angular/core';

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
      console.log("Mensagem recebida do mfe: ", msg.data);
      this.treatMessage(msg.data);
   }, false)   
  }

  treatMessage(msg: any) {
    switch (msg.action) {
      case 'init-iframe':
        this.initIframeData();
        break;
      case 'endpoint':
        this.callEndpoint(msg.endpoint, msg.params);
        break;
      default:
        break;
    }
  }

  initIframeData() {
    // Busca os dados iniciais que o iframe espera e retorna pra ele
    const initData = {
      empresa: "Empresa Teste",
      usuario: "Usuario Teste"
    };
    this.sendMessage(initData);
  }

  callEndpoint(endpoint: string, params: any) {
    // Chama o endpoint esperado e manda o response para iframe
    let response = {
      codigo: "762387618",
      nome: "Nome Teste",
      data: "19/11/2022"
    };
    this.sendMessage(response);
  }

  sendMessage(msg: any) {
    // if(this.mfe)
    // this.mfe.nativeElement.postMessage(msg, '*');
    window.frames[0].postMessage(msg, '*');
  }
}
