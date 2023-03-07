import { Component, OnInit } from '@angular/core';
import { MyfavouritesongsService } from '../services/my-favourite-  songs.service';
import { content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent implements OnInit {
  contents: content[];
  searchTerm: string;
  searchResult: string;

  constructor(private myfavouritesongsService: MyfavouritesongsService) { }

  ngOnInit() {
    this.myfavouritesongsService.getContent().subscribe(contents => {
      this.contents = contents;
    });
  }

  search() {
    const foundIndex = this.contents.findIndex(content => content.title === this.searchTerm);
    if (foundIndex >= 0) {
      this.highlightIndex = foundIndex;
      this.searchResult = 'found';
    } else {
      this.searchResult = 'not found';
    }
  }
}
