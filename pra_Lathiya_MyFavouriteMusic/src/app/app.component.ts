import {Component, NgModule} from '@angular/core';
import { ContentListComponent } from './content-list/content-list.component';
import { HoverAffectDirective } from './content-card/hover-affect.directive';
import {BrowserModule} from "@angular/platform-browser";
import {AppModule} from "./app.module";
import { Observable } from 'rxjs';
import { content } from '../helper-files/content-interface';
import { MyFavoriteSongsService } from '../app/my-favorite-songs.service';

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

  favoriteContent$: Observable<content>;

  constructor(private myFavoriteSongsService: MyFavoriteSongsService) {}

  ngOnInit() {
    this.favoriteContent$ = this.myFavoriteSongsService.getContentById(1);
  }
}
