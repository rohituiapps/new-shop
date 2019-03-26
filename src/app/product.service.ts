import { map } from 'rxjs/operators';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private db: AngularFireDatabase) { }

  create(product) {
    return this.db.list('/movies').push(product);
  }

  getAll() {
    return this.db.list('/movies').snapshotChanges().pipe(map(changes => {
      return changes.map(c => ({key: c.payload.key, ...c.payload.val() }))
    }));
  }

  get(movieId) {
    return this.db.object('/movies/' + movieId).snapshotChanges();
  }

  update(productId, product) {
    return this.db.object('/movies' + productId).update(product);
  }
}
