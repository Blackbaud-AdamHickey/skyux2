import { Component } from '@angular/core';

@Component({
  selector: 'sky-test-cmp',
  template: require('./search.component.fixture.html')
})
export class SearchTestComponent {

  public searchText: string;
  public placeholderText: string;

  public lastSearchTextApplied: string;
  public lastSearchTextChanged: string;

  public searchApplied(searchText: string) {
    this.lastSearchTextApplied = searchText;
  }
  public searchChanged(searchText: string) {
    this.lastSearchTextChanged = searchText;
  }
}
