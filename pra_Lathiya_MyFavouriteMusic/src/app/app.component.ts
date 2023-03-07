import {Component, NgModule} from '@angular/core';
import { ContentListComponent } from './content-list/content-list.component';
import { HoverAffectDirective } from './content-card/hover-affect.directive';
import {BrowserModule} from "@angular/platform-browser";
import {AppModule} from "./app.module";
import { Observable } from 'rxjs';
import { content } from '../helper-files/content-interface';
import { MyFavoriteSongsService } from '../app/my-favorite-songs.service';
import { MessageService } from '../message.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

@NgModule({
  declarations: [
    AppComponent,
    ContentListComponent,
    HoverAffectDirective
  ],
    imports: [
        BrowserModule,
        AppModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppComponent implements OnInit {
  topContent: content;
  inputId: string = '';
  contentCard: Content;
  messages: any[] = [];
  constructor(private contentService: ContentService, private messageService: MessageService) {}
  getContentCard() {
    const id = parseInt(this.inputId);

    // Check if id is a valid number within the array bounds
    if (isNaN(id) || id < 1 || id > this.contentService.getContentLength()) {
      this.messageService.sendMessage('Error: Invalid ID entered');
      return;
    }

    // Retrieve the content card from the service
    this.contentService.getContentItem(id).subscribe(
      contentItem => {
        this.contentCard = contentItem;
        this.messageService.sendMessage(`Content Item at id: ${id}`);
      },
      error => {
        console.log(error);
        this.messageService.sendMessage('Error: Failed to retrieve content item');
      }
    );
  ngOnInit() {
    this.messageService.sendMessage('Content array loaded!');
    this.contentService.getContentArray().subscribe(contentArray => {
      if (message && message.text) {
        this.messages.push(message.text);
      }
      this.topContent = contentArray[0];
    });
  }
  }
