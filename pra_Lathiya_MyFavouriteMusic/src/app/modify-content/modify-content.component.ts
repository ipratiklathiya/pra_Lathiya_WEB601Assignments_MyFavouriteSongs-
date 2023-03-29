import { Component, EventEmitter, Output } from '@angular/core';
import { Content } from '../pra_Lathiya_MyFavouriteMusic/src/app/helper-files/content-interface';
import { ContentService } from '../content-service.service';

@Component({
  selector: 'app-modify-content',
  templateUrl: './modify-content.component.html',
  styleUrls: ['./modify-content.component.css']
})
export class ModifyContentComponent {

  newContent: Content = {
    id: null,
    title: '',
    description: '',
    imageUrl: ''
  };

  @Output() contentAdded = new EventEmitter<Content>();

  constructor(private contentService: ContentService) { }

  addNewContent(): void {
    this.contentService.addContent(this.newContent).subscribe(content => {
      this.contentAdded.emit(content);
      this.newContent = {
        id: null,
        title: '',
        description: '',
        creator:'',
        imgUrl: '',
        type:'',
        tags:'',

      };
    });
  }

}
