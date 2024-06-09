import { Routes } from '@angular/router';
import { NewCategoryPageComponent } from './new-category-page/new-category-page.component';
import { FormGroup } from '@angular/forms';

export const categoriesRoutes: Routes = [
  {
    path: 'categories/new',
    component: NewCategoryPageComponent,
    canDeactivate:[FormGroup]
  },
];