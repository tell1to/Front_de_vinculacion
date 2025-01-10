import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BudgetListComponent } from './budget-list/budget-list.component';
import { BudgetDetailComponent } from './budget-detail/budget-detail.component';
import { BudgetCreateComponent } from './budget-create/budget-create.component';

const routes: Routes = [
  { path: '', component: BudgetListComponent },
  { path: 'create', component: BudgetCreateComponent },
  { path: 'detail', component: BudgetDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BudgetRoutingModule {}
