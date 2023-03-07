import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { content } from '../helper-files/content-interface';
import { contentDb } from '../helper-files/contentDb';
@Injectable({
  providedIn: 'root'
})
export class MyFavouriteSongsService {

  constructor() { }

  getContent(): Observable<content[]> {
    return of(contentDb.myfavouritesongs);
  }
}
