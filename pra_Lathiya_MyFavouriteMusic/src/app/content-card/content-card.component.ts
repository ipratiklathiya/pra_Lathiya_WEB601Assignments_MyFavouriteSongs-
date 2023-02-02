import { Component } from '@angular/core';
import { ContentList } from './helper-files/content-list';

@Component({
  selector: 'app-content-card',
  template: `
    <div *ngFor="let content of contentList.List; let i = index">
      <div [innerHTML]="contentList.display(i)"></div>
    </div>
  `,
})
export class ContentCardComponent {
  contentList = new ContentList();

  constructor() {
    this.contentList.add({
      id: 1,
      title: 'First Content',
      description: 'This is the first content',
      creator: 'John Doe',
    });
    this.contentList.add({
      id: 2,
      title: 'Second Content',
      description: 'This is the second content',
      creator: 'Jane Doe',
    });
    this.contentList.add({
      id: 3,
      title: 'Third Content',
      description: 'This is the third content',
      creator: 'John Smith',
    });
  }
}
