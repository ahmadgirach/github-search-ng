import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Input() records: any[] = [];
  @Output() onChange = new EventEmitter();

  NO_OF_RECORDS_PER_PAGE: number = 10;

  pagination: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.calculate();
  }

  calculate() {
    const totalRecords = this.records?.length;
    const remainder = totalRecords % this.NO_OF_RECORDS_PER_PAGE;
    this.pagination = remainder !== 0 ? totalRecords + 1 : totalRecords;
  }

  handleClick(event: any) {
    this.onChange.emit(event);
  }

}
