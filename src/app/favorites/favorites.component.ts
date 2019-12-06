import {Component, OnInit} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  favorites$: Observable<string[]>;

  constructor(private db: AngularFirestore) {
  }

  ngOnInit() {
    this.favorites$ = this.db.collection('favorites').valueChanges({idField: 'id'}).pipe(
      map((bookDocuments: { id: string }[]) => bookDocuments.map(bookDocument => bookDocument.id)));
  }

}
