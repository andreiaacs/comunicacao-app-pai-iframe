import { Component, OnInit, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
import { ListenerService } from '../listener.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(
    private listenerService: ListenerService
  ) { }

  ngOnInit(): void {
    this.listenerService.initListener();
  }

}
