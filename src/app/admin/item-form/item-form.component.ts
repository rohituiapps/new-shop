import { ProductService } from './../../product.service';
import { CategoryService } from './../../category.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs'
import { Router, ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css']
})
export class ItemFormComponent implements OnInit {
  categories$: Observable<any[]>;
  movie = {};
  movieId;

  constructor(private router: Router, private route: ActivatedRoute, private categoryService: CategoryService, private productService: ProductService) {    
     this.categories$ = categoryService.getCategories();
     this.movieId = this.route.snapshot.paramMap.get('id');     
     if(this.movieId) this.productService.get(this.movieId).pipe(take(1)).subscribe(m => this.movie = m.payload.val());     
   }

   save(movie) {
     if(this.movieId){
      this.productService.update(this.movieId, movie);
     }
     else {
      this.productService.create(movie);
     } 
     this.router.navigate(['/admin/admin-items']);
   }

  ngOnInit() {
  }

}
