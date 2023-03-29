import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ContentFilterPipe } from '../app/pipes/contentFilter.pipe';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentCardComponent } from './content-card/content-card.component';
import { ContentListComponent } from './content-list/content-list.component';
import { CreateContentComponent } from './create-content/create-content.component';
import { ModifyContentComponent } from './modify-content/modify-content.component';


@NgModule({
  declarations: [
    AppComponent,
    ContentCardComponent,
    ContentListComponent,
    ContentFilterPipe,
    CreateContentComponent,
    ModifyContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
