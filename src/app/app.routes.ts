import { Routes } from '@angular/router';
import { TodosComponent } from './MyComponents/todos/todos.component';
import { AboutComponent } from './MyComponents/about/about.component';

export const routes: Routes = [
    { path: '', component: TodosComponent }, // Default route
    { path: 'about', component: AboutComponent }, // About route
  ];
