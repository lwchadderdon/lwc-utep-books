import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map, retry} from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  bookResults$: Observable<Book[]>;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
  }

  search(query: string) {
    this.bookResults$ = this.http.get('https://www.googleapis.com/books/v1/volumes', {
      params: {
        q: query,
        maxResults: '10',
      },
    }).pipe(map((wholeResult: { items }) => wholeResult.items));
  }
}
