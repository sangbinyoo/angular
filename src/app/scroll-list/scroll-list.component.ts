import { Document } from './../documents';
import { TextService } from '../text.service';
import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-scroll-list',
  templateUrl: './scroll-list.component.html',
  styleUrls: ['./scroll-list.component.css']
})
export class ScrollListComponent implements OnInit {
  @Output() listClicked = new EventEmitter<number>();
  scrollList: Document[];
  constructor(
    private txS: TextService
  ) { }

  ngOnInit() {
    this.getTexts();
  }
  clickBtn(something) {
    this.listClicked.emit(something);
  }
  getTexts(): void {
    this.txS.getTexts().subscribe(documents => this.scrollList = documents);
  }
}
