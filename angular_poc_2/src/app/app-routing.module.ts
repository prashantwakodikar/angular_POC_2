import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WellListComponent } from './components/well-list/well-list.component';
import { WellComponent } from './components/well-list/well/well.component';

const routes: Routes = [
  {
    path:"", redirectTo:"well-list", pathMatch:'full'
  },
  {
    path:"well-list", component:WellListComponent
  },
  {
    path:"well-list/well", component:WellComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
