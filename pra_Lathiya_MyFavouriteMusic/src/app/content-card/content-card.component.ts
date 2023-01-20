import { Component } from '@angular/core';
import { ContentList } from './helper-files/content-list';
import { Content } from './helper-files/content-interface';


function constructor() {

  // @ts-ignore
  this.contentList = new ContentList();
  {
    const contentItems: Content[] = [
      { id: 1, title: 'Love The Way You Lie', description: 'Favourite Song', creator: 'Rihana' },
      { id: 2, title: 'Baby', description: 'it has record for most viewers', creator: 'Salman Khan' },
      { id: 3, title: 'Come Around me', description: 'this song is very popular', creator: 'Alex' }
    ];

    // @ts-ignore
    contentItems.forEach(item => this.contentList.add(item));

  }
}

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.css']
})
export class ContentCardComponent {
  get contentList(): any {
    return this._contentList;
  }

  set contentList(value: any) {
    this._contentList = value;
  }
  private _contentList: any;
  item: any;

}
