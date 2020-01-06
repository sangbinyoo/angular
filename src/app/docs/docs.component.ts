import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.css']
})
export class DocsComponent implements OnInit {
  docId: number;
  constructor() { }

  ngOnInit() {
    this.docId = 1;
  }

  selectedDoc(id: number) {
    this.docId = id;
  }
}
