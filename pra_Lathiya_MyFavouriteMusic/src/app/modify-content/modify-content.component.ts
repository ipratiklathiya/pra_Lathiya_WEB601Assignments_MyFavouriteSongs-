import { Component, OnInit } from '@angular/core';
import { Content } from '../content';
import { ContentService } from '../content.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-modify-content',
  templateUrl: './modify-content.component.html',
  styleUrls: ['./modify-content.component.css']
})
export class ModifyContentComponent implements OnInit {
  newContent: Content = {
    id: null,
    title: '',
    description: '',
    creator:'',
    imgUrl: '',
    type:'',
    tags:''
  };

  constructor(private contentService: ContentService, private messageService: MessageService) { }

  ngOnInit() {
  }

  addContent(): void {
    this.contentService.addContent(this.newContent)
      .subscribe(content => {
        this.messageService.add(`Content added with id=${content.id}`);
        this.newContent = {
          id: null,
          title: '',
          description: '',
          creator:'',
          imgUrl: '',
          type:'',
          tags:''
        };
      });
  }
}
