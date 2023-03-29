import { Component, OnInit } from '@angular/core';
import { Content } from '../content';
import { ContentService } from '../content-service.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-modify-content',
  templateUrl: './modify-content.component.html',
  styleUrls: ['./modify-content.component.css']
})
export class ModifyContentComponent implements OnInit {

  content: Content = { id: null, title: '', description: '', imgUrl: '', creator: '', type:'', tags:''  };
  updateMode: boolean = false;

  constructor(
    private contentService: ContentService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
  }

  addContent(): void {
    if (!this.content.id) {
      this.contentService.addContent(this.content).subscribe(() => {
        this.messageService.add('Content added successfully');
        this.clearFields();
      });
    } else {
      this.updateMode = true;
      const contentId = this.content.id;
      this.contentService.getContent(contentId).subscribe(content => {
        if (content) {
          this.content = content;
          this.messageService.add(`Updating content with id ${contentId}`);
        } else {
          this.updateMode = false;
          this.messageService.add(`No content found with id ${contentId}`);
        }
      });
    }
  }

  updateContent(): void {
    const contentId = this.content.id;
    this.contentService.updateContent(contentId, this.content).subscribe(() => {
      this.messageService.add(`Content with id ${contentId} updated successfully`);
      this.clearFields();
      this.updateMode = false;
    });
  }

  clearFields(): void {
    this.content = { id: null, title: '', description: '', imgUrl: '', creator: '', type:'', tags:'' };
  }
}
