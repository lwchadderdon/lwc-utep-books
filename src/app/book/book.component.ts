import {Component, Input, OnInit} from '@angular/core';
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  @Input() bookId: string;
  private bookDocument: AngularFirestoreDocument<unknown>;

  constructor(private db: AngularFirestore) { }

  ngOnInit() {
    this.bookDocument = this.db.doc(`favorites/${this.bookId}`);
  }

  onFavoriteChange(isFavorited: boolean) {
    if (isFavorited) {
      this.bookDocument.delete();
    } else {
      this.db.collection('favorites').doc(this.bookId).set({});
    }
  }
}
