import { CategoryService } from './../../category.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css']
})
export class ItemFormComponent implements OnInit {
  categories$;

  constructor(categoryService: CategoryService ) {
    console.log(categoryService.getCategories());
    this.categories$ = categoryService.getCategories();    
   }

  ngOnInit() {
  }

}
