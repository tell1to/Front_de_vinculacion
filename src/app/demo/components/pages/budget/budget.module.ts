import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BudgetRoutingModule } from './budget-routing.module';
import { BudgetListComponent } from './budget-list/budget-list.component';
import { BudgetDetailComponent } from './budget-detail/budget-detail.component';
import { BudgetCreateComponent } from './budget-create/budget-create.component';
import { BudgetService } from './budget.service';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';



@NgModule({
  declarations: [
    BudgetListComponent,
    BudgetDetailComponent,
    BudgetCreateComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BudgetRoutingModule,
    InputNumberModule,
    InputTextareaModule,
    DropdownModule,
    ButtonModule,
    TableModule,
    PaginatorModule
  ],
  providers: [BudgetService]
})
export class BudgetModule {}
