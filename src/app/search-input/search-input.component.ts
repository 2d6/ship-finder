import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent {

  @Output()
  searchEventEmitter = new EventEmitter()

  runSearch(query: string) {
    this.searchEventEmitter.emit(query)
  }

}
