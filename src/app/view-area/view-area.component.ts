import { Observable } from 'rxjs';
import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { TextService } from '../text.service';
import { MessageService } from '../message.service';
import { Document } from '../documents';

@Component({
  selector: 'app-view-area',
  templateUrl: './view-area.component.html',
  styleUrls: ['./view-area.component.css']
})
export class ViewAreaComponent implements OnInit {
  doc: Document;
  isLoading: boolean;
  @Input()
  set select(select: number) {
    this.getDoc(select);
  }

  constructor(
    private txS: TextService,
    public messageService: MessageService
  ) { }

  ngOnInit() {
  }
  getDoc(id: number): void {
    this.isLoading = true;
    this.txS.getText(id).subscribe(res => {
    this.doc = res;
    this.isLoading = false;
    });
  }
}
