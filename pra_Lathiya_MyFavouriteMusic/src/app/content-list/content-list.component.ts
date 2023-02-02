import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent implements OnInit {
  contents = [
    {
      id: 1,
      title: 'Content 1',
      image: 'https://via.placeholder.com/150x150',
      description: 'Description 1',
      creator: 'Creator 1',
      type: 'Type 1',
      tags: ['Tag 1', 'Tag 2']
    },
    {
      id: 2,
      title: 'Content 2',
      image: 'https://via.placeholder.com/150x150',
      description: 'Description 2',
      creator: 'Creator 2',
      type: 'Type 2',
      tags: ['Tag 3', 'Tag 4']
    },
    {
      id: 3,
      title: 'Third Content',
      description: 'This is the third content',
      creator: 'John Smith',
      type: 'Article',
      tags: ['Tag3', 'Tag4'],
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 4,
      title: 'Fourth Content',
      description: 'This is the fourth content',
      creator: 'Jane Smith',
      type: 'Video',
      tags: ['Tag4', 'Tag5'],
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 5,
      title: 'Fifth Content',
      description: 'This is the fifth content',
      creator: 'John Doe',
      type: 'Article',
      tags: ['Tag5', 'Tag6'],
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 6,
      title: 'Sixth Content',
      description: 'This is the sixth content',
      creator: 'Jane Doe',
      type: 'Video',
      tags: ['Tag6', 'Tag7'],
      image: 'https://via.placeholder.com/150'
    },
  ];

  showIdAndTitle(id: number, title: string) {
    console.log(`Content id: ${id}, title: ${title}`);
  }

  constructor() { }

  ngOnInit() {
  }

}
