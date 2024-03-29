import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContentListComponent } from './content-list/content-list.component';
import { ContentDetailComponent } from './content-detail/content-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: 'list', component: ContentListComponent },
  { path: 'detail/:id', loadChildren: () => import('./content-detail/content-detail.module').then(m => m.ContentDetailModule) },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
