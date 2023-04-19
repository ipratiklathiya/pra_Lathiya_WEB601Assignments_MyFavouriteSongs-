import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

// @ts-ignore
import { Content } from './/pra_Lathiya_MyFavouriteMusic/src/app/helper-files/content-interface';
import { ContentService } from '../content-service.service';
// @ts-ignore
import { MessageService } from '../message.service';

@Component({
  selector: 'app-content-detail',
  templateUrl: './content-detail.component.html',
  styleUrls: ['./content-detail.component.css']
})
export class ContentDetailComponent implements OnInit {
  content: Content;
  message: string;

  constructor(
    private route: ActivatedRoute,
    private contentService: ContentService,
    private messageService: MessageService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getContent();
  }

  getContent(): void {
    // @ts-ignore
    const id = +this.route.snapshot.paramMap.get('id');
    // @ts-ignore
    this.contentService.getContent(id)
      .subscribe(content => {
        this.content = content;
        this.messageService.add(`ContentDetailComponent: fetched content id=${content.id}`);
      });
  }

  goBack(): void {
    this.location.back();
  }
}
