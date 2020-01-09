import { Observable } from 'rxjs';
import { TextService } from './../text.service';
import { Component, OnInit, ViewChild, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AgGridAngular } from 'ag-grid-angular';
@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {
  @ViewChild('agGrid', {read: '', static: true}) agGrid: AgGridAngular;

  title = 'app';

  gridOptionss = {
    columnDefs : [
      {headerName: 'DiskSizes', field: 'size', comparator: sizeComparator}
    ],
    defaultColDef: {
      sortable: true
    },
    multiSortKey: 'ctrl',
    animateRows: 'true',
    sortingOrder: ['desc', 'asc']
  };
  rowData: any;
  dataSubscriber: Observable<any>;
  constructor(
    private http: HttpClient,
    private textService: TextService) { }

  ngOnInit() {
    this.getTableData();
  }

  getTableData() {

    const myObserver = {
      next: (v) => this.inputData(v),
      error: (e) => console.log(e),
      complete: () => this.agGrid.api.sizeColumnsToFit()
    };

    this.dataSubscriber = this.textService.getTableData();
    this.dataSubscriber.subscribe(myObserver);

  }

  // table객체 안에 diskSize속성은 배열이므로 rowData에 push
  inputData(something: any) {
    this.rowData = [];
    for (const i of something.diskSizes) {
      this.rowData.push(i);
    }
  }

  getSelectedRows() {
    const selectedNodes = this.agGrid.api.getSelectedNodes();
    const selectedData = selectedNodes.map( node => node.data );
    const selectedDataStringPresentation = selectedData.map ( node => node.make + ' ' + node.model).join(',');
    alert(`selected nodes: ${selectedDataStringPresentation}`);
  }
}

function sizeComparator(first, second ) {

  const x = transformSizeUnit(first);
  const y = transformSizeUnit(second);

  return x - y;

}

function transformSizeUnit(sizeString) {

  // 1MB일경우 1024kb로 변환
  if (new RegExp(/KB/, 'i').test(sizeString)) {

    return extractNumber(sizeString);

  // GB 크기가 있다면 추가?
  } else if (new RegExp(/MB/, 'i').test(sizeString) ) {

    return 1024 * extractNumber(sizeString);

  } else if (new RegExp(/GB/, 'i').test(sizeString) ) {

    return 1024 * 1024 * extractNumber(sizeString);

  // no size format
  } else {

    return extractNumber(sizeString);

  }
}

function extractNumber(sizeString) {

  const regex = new RegExp(/\d*/);

  return Number(regex.exec(sizeString));

}
