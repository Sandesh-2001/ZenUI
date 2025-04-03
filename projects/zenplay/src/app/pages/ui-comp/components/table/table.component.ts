import { Component, inject } from '@angular/core';
import { ZenUiModule } from '../../../../../../../zenui/src/public-api';
import { HttpClient } from '@angular/common/http';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-table',
  imports: [ZenUiModule, NgClass],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent {
  httpClient = inject(HttpClient);

  tableData: any = [];
  stringComparator = (a: string, b: string) => a.localeCompare(b);
  sorts:{prop : string, dir : "asc" | "desc"}[] = [{prop : "title", dir : "asc"}, {prop : "returnPolicy", dir : "desc"}]

  columns: {
    prop: string;
    title: string;
    sortable?: boolean;
    comparator?: (a: any, b: any) => number;
    frozenLeft?:boolean,
    width?:number
  }[] = [
    { prop: 'title', title: 'Title', sortable: true, comparator: this.stringComparator, frozenLeft: true},
    { prop: 'category', title: ' Category', sortable: false },
    { prop: 'price', title: 'Price', sortable: false },
    { prop: 'rating', title: 'Rating', sortable: false },
    { prop: 'returnPolicy', title: 'Return Policy' },
    { prop: 'availabilityStatus', title: 'Availability Status' },
    { prop: "description", title : "Description", width: 800 }
  ];
  isLoading: boolean = true;
  rowHeight = 40;
  checkBoxFixedPosition:any = 'left'

  page: any = {
    pageNumber: 0,
    size: 10,
    totalElements: 30,
    totalPages: 1,
  };

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.isLoading = true;
    this.httpClient
      .get(
        `https://dummyjson.com/products?page=${
          this.page.pageNumber + 1
        }&limit=${this.page.size}`
      )
      .subscribe({
        next: (data: any) => {
          this.tableData = data.products;
          this.isLoading = false;
          const totalProducts = data.products.length;
          this.page.totalElements = 30;
          this.page.totalPages = Math.ceil(totalProducts / this.page.size);
        },
        error: (err) => {
          console.log(err);
        },
      });
  }

  onPageChange(pageNumber: number) {
    console.log(pageNumber);

    this.page.pageNumber = pageNumber;
    this.fetchData();
  }

  onSelectionChange(evt: any) {
    console.log(evt);
  }

  handleSortChange(sortingCriteria: { column: string; direction: string }[]) {
    console.log('Received sorting criteria:', sortingCriteria);
    // Apply sorting logic if needed
  }
  
}
