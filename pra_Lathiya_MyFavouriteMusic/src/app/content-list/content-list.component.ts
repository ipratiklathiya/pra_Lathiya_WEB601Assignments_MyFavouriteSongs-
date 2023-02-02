import { Component } from '@angular/core';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent {

  contentArray = [    {
    id: 1,
    title: 'First Content',
    description: 'This is the first content',
    creator: 'John Doe',
    image: 'https://example.com/image1.jpg',
    type: 'Blog',
    tags: ['tag1', 'tag2', 'tag3']
  },
    {
      id: 2,
      title: 'Second Content',
      description: 'This is the second content',
      creator: 'Jane Doe',
      image: 'https://example.com/image2.jpg',
      type: 'Video',
      tags: ['tag4', 'tag5', 'tag6']
    },
    {
      id: 3,
      title: 'Third Content',
      description: 'This is the third content',
      creator: 'John Smith',
      image: 'https://example.com/image3.jpg',
      type: 'Article',
      tags: ['tag7', 'tag8', 'tag9']
    },
    // Add more content items here
  ];

}
