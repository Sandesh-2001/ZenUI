import { Component, EventEmitter, Input, Output, TemplateRef } from '@angular/core';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ColumnMode, SelectionType } from './public-types/public-types';
import { DragDropModule, moveItemInArray } from '@angular/cdk/drag-drop';
import { NgClass } from '@angular/common';

@Component({
  selector: 'zen-table',
  imports: [NgxDatatableModule, DragDropModule, NgClass],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent {
  @Input() rows: any = [];
  @Input() columns: {
    prop: string;
    title: string;
    sortable?: boolean;
    comparator?: (a: any, b: any) => number;
    frozenLeft?: boolean;
    width?: number;
  }[] = [];
  @Input() isLoading: boolean = true;
  @Input() reorderable: boolean = false;
  @Input() swapColumns: boolean = false;
  @Input() sorts: { prop: string; dir: 'asc' | 'desc' }[] = [
    { prop: 'name', dir: 'desc' },
  ];
  @Input() rowHeight: any = 'auto';
  @Input() checkBoxFixedPosition: 'left' | 'right' | 'none' = 'none';
  @Input() rowTemplate!:TemplateRef<any>;

  @Input() page: {
    pageNumber: number;
    size: number;
    totalElements: number;
    totalPages: number;
  } = {
    pageNumber: 0,
    size: 10,
    totalElements: 10,
    totalPages: 1,
  };

  @Output() onRowSelectionChange: EventEmitter<any> = new EventEmitter();
  @Output() onPageChange: EventEmitter<number> = new EventEmitter();
  @Output() onSortChange: EventEmitter<any> = new EventEmitter();

  ColumnMode = ColumnMode;
  SelectionType: any = SelectionType;

  selectedRows: any[] = [];

  ngOnInit(){}

  onSelect({ selected }: any) {
    this.selectedRows.splice(0, this.selectedRows.length);
    this.selectedRows.push(...selected);
    this.onRowSelectionChange.emit(this.selectedRows);
  }

  setPage(pageInfo: any) {
    if (pageInfo.offset !== this.page.pageNumber) {
      this.page.pageNumber = pageInfo.offset;
      this.onPageChange.emit(pageInfo.offset);
    }
  }

  onSort(event: any) {
    const sortingCriteria = event.sorts.map((sort: any) => ({
      column: sort.prop,
      direction: sort.dir,
    }));

    console.log('Sorting Criteria:', sortingCriteria);

    // Emit sorting changes
    this.onSortChange.emit(sortingCriteria);
  }

  drop(event: any) {
    moveItemInArray(this.rows, event.previousIndex, event.currentIndex);
    this.rows = [...this.rows];
  }
}
