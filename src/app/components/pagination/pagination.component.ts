import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Input() records: any[] = [];
  @Output() onChange = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  handleClick(event: any) {
    this.onChange.emit(event);
  }

}
