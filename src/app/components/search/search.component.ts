import { SearchResults } from './../../models/search-results.model';
import { SearchService } from './../../services/search.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  displayedColumns: string[] = ['albumArt', 'songName', 'artistName', 'albumName'];
  term: string;
  results: SearchResults;
  constructor(private search: SearchService) { }
  ngOnInit() {
  }
  submitSearch() {
    console.log('searching');

    if(this.term === null || this.term === undefined) return;
    this.search.searchiTunes(this.term).subscribe(res => {
      this.results = res;
      this.results.results = this.results.results.slice(0,3);
      console.log(this.results);
    });
  }
}