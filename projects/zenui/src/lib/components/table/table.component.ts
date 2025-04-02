import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ColumnMode, SelectionType } from './public-types/public-types';

@Component({
  selector: 'zen-table',
  imports: [NgxDatatableModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent {
  @Input() rows:any = [
    { name: 'Austin', gender: 'Male', company: 'Swimlane' },
    { name: 'Dany', gender: 'Male', company: 'KFC' },
    { name: 'Molly', gender: 'Female', company: 'Burger King' },
    { name: 'Sarah', gender: 'Female', company: 'McDonalds' },
    { name: 'Chris', gender: 'Male', company: 'Subway' },
    { name: 'John', gender: 'Male', company: 'Pizza Hut' },
    { name: 'Linda', gender: 'Female', company: 'Starbucks' },
    { name: 'Michael', gender: 'Male', company: 'Dunkin Donuts' }
  ];

  tempRows:any = [];

  @Input() columns: { prop: string }[] = [{ prop: 'name' }, { prop: 'gender' }, { prop: 'company' }];
  @Input() isLoading: boolean = true;

  @Input() page: {
    pageNumber: number,
    size: number,
    totalElements: number,
    totalPages: number
  } = {
    pageNumber: 0,
    size: 2,
    totalElements: 8,
    totalPages: 4
  };

  @Output() onRowSelectionChange: EventEmitter<any> = new EventEmitter();
  @Output() onPageChange:EventEmitter<number> = new EventEmitter();

  ColumnMode = ColumnMode;
  SelectionType:any = SelectionType;

  selectedRows: any[] = [];

  onSelect({ selected }:any) {
    this.selectedRows.splice(0, this.selectedRows.length);
    this.selectedRows.push(...selected);
    this.onRowSelectionChange.emit(this.selectedRows);
  }

  setPage(pageInfo:any) {
    this.page.pageNumber = pageInfo.offset;
    this.isLoading = true;
    setTimeout(() => {
      this.tempRows = this.rows.slice(this.page.pageNumber, (this.page.pageNumber * this.page.size) + this.page.size);
      this.isLoading = false;
    }, 4000)
    this.onPageChange.emit(pageInfo);
  }

}