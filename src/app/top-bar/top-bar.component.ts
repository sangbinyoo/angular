import { Component, OnInit } from '@angular/core';
import { MenuList } from '../menus';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})

export class TopBarComponent implements OnInit {
  menus = MenuList;
  constructor() { }

  ngOnInit() {

  }
  move(title: string): void {

  }

}
