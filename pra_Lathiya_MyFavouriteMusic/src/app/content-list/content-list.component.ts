import { Component } from '@angular/core';
// @ts-ignore
import {content} from '../helper-files/content-interface';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent {

  searchTerm: string;
  result: string;

  constructor() { }

  ngOnInit() {
  }

  search() {
    const foundIndex = this.contentArray.findIndex(content => content.title === this.searchTerm);
    if (foundIndex >= 0) {
      this.highlightIndex = foundIndex;
      this.searchResult = 'found';
    } else {
      this.searchResult = 'not found';
    }
  }
}
