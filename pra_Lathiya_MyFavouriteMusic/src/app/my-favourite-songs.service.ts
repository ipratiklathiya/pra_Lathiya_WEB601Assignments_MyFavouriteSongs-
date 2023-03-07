import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { content } from '../helper-files/content-interface';
import { CONTENT } from '../helper-files/contentDb';

@Injectable({
  providedIn: 'root'
})
export class MyFavoriteSongsService {

  constructor() { }

  getContents(): Observable<content[]> {
    return of(CONTENT);
  }

  getContentById(id: number): Observable<content> {
    const contentItem = CONTENT.find(item => item.id === id);
    return of(contentItem);
  }
}
