import { AfterViewInit, Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements AfterViewInit {
  // output the search value to call the backend from the parent
  @ViewChild('searchRef') searchRef: ElementRef | undefined;
  @Output() readonly searchProduct: EventEmitter<string> = new EventEmitter<string>();

  ngAfterViewInit(): void {
    // Set search input initial focus
    setTimeout(() => {
      if (this.searchRef) {
        this.searchRef.nativeElement.focus();
      }
    });
  }

  onSearchChange(searchText: string): void {
    this.searchProduct.emit(searchText);
  }

  resetResearch(): void {
    if (this.searchRef) {
      this.searchRef.nativeElement.value = '';
      setTimeout(() => this.searchRef && this.searchRef.nativeElement.focus());
    }
  }
}
