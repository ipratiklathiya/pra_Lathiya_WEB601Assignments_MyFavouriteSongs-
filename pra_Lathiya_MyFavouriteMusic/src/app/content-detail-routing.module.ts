import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContentDetailComponent } from './content-detail.component';

const routes: Routes = [
  { path: '', component: ContentDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentDetailRoutingModule { }
