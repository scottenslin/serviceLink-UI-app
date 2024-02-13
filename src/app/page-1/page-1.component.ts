import { Component } from '@angular/core';
import {CdkDragDrop, CdkDropList, CdkDrag, moveItemInArray} from '@angular/cdk/drag-drop';
import { FormsModule } from '@angular/forms';
import { Category } from './category';

@Component({
  selector: 'app-page-1',
  standalone: true,
  imports: [CdkDropList, CdkDrag, FormsModule],
  templateUrl: './page-1.component.html',
  styleUrl: './page-1.component.scss'
})

export class Page1Component {
  newCategory = '';
  displayCreateNewCategory = true;
  categories: Category[] = [];

  drop(event: CdkDragDrop<Category[]>) {
    moveItemInArray(this.categories, event.previousIndex, event.currentIndex);
  }

  removeCategory(category: Category) {
    this.categories = this.categories.filter((currCat: Category) => currCat.name !== category.name );
  }

  saveCategory() {
    this.categories.push({name: this.newCategory, seoNumber: this.categories.length + 1});
    this.newCategory = '';
    this.displayCreateNewCategory = false;
  }

  showNewCategorySection() {
    this.displayCreateNewCategory = true;
  }

}
