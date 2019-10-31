import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SearchResults } from '../models/search-results.model';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  constructor(private http: HttpClient) { }
  searchiTunes(term: string): Observable<SearchResults> {
    return this.http.jsonp<SearchResults>
      ('https://itunes.apple.com/search?entity=song&term=' + term, 'callback');
  }
}
