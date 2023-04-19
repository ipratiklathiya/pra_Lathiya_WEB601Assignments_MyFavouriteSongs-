import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ContentFilterPipe } from '../app/pipes/contentFilter.pipe';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentCardComponent } from './content-card/content-card.component';
import { ContentListComponent } from './content-list/content-list.component';
import { CreateContentComponent } from './create-content/create-content.component';
import { ModifyContentComponent } from './modify-content/modify-content.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { ModifyContentComponentComponent } from './modify-content-component/modify-content-component.component';
import { AddContentDialogComponent } from './add-content-dialog/add-content-dialog.component';
import { ContentDetailComponent } from './content-detail/content-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: 'list', component: ContentListComponent },
  { path: 'detail/:id', component: ContentDetailComponent },
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
    declarations: [
        AppComponent,
        ContentCardComponent,
        ContentListComponent,
        ContentFilterPipe,
        CreateContentComponent,
        ModifyContentComponent,
        ModifyContentComponentComponent,
        AddContentDialogComponent,
        ContentDetailComponent,
        PageNotFoundComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
      MatButtonModule,
      MatInputModule,
      RouterModule.forRoot(routes)
    ],
    providers: [],
    exports: [
        ContentFilterPipe,
      RouterModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
