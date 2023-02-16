import { Component } from '@angular/core';
// @ts-ignore
import {content} from '../helper-files/content-interface';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent {
  contents: content[] = [
    {
      id: 1,
      title: 'Baby',
      description: 'its my one of the favourite song',
      creator: 'Justin Bieber',
      imgURL: 'https://justin-biber-babysong.com',
      type: 'rock music',
      tags: ['Tag 1.1', 'Tag 1.2']
    },
    {
      id: 2,
      title: 'Love me like you do',
      description: 'its highest lisetned song of 2018',
      creator: 'Rihana',
      imgURL: 'https://lovemelikeyoudo.com',
      type: 'pop',
      tags: ['Tag 2.1', 'Tag 2.2', 'Tag 2.3']
    },
    {
      id: 3,
      title: 'Dirty Dancer',
      description: 'its awesome song',
      creator: 'enrique eglesis',
      imgURL: 'https://dirtydancer.com',
      type: 'rock music',
      tags: ['Tag 7', 'Tag 8', 'Tag 9'],
    },
    {
      id: 4,
      title: 'Tere Bina',
      description: 'Bollywood song',
      creator: 'Emran Hasmi',
      imgURL: 'https://terebina.photos/id/4/200/300',
      type: 'Love song',
      tags: ['Tag 10', 'Tag 11', 'Tag 12'],
    },
    {
      id: 5,
      title: 'sanam re',
      description: 'its most romantic hindi song',
      creator: 'Jenish Lunagariya',
      imgURL: 'https://sanamre.photos/id/5/200/300',
      type: 'sad song',
      tags: ['Tag 13', 'Tag 14', 'Tag 15'],
    },
    {
      id: 6,
      title: 'Tokyo drift',
      description: 'its famous song from the fast and furious',
      creator: 'danja kundra',
      type: 'rock music',
      tags: ['Tag 16', 'Tag 17', 'Tag 18'],
    },
    {
      id: 7,
      title: 'Shape of You',
      description: 'One of the most popular songs of 2017',
      creator: 'Ed Sheeran',
      imgURL: 'https://shapeofyou.photos/id/7/200/300',
      tags: ['Tag 19', 'Tag 20', 'Tag 21'],
    },
  ];
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
