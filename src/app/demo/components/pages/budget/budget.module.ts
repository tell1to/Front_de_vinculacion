import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BudgetFormComponent } from './budget-form/budget-form.component';
import { BudgetRoutingModule } from './budget-routing.module';
import { BudgetService } from './budget.service';
import { DropdownModule } from 'primeng/dropdown';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { AddDetailFormComponent } from './add-detail-modal/add-detail-form.component';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [
    BudgetFormComponent,
    AddDetailFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    TableModule,
    BudgetRoutingModule,
    DropdownModule,
    DialogModule,
    ButtonModule
  ],
  providers: [BudgetService]
})
export class BudgetModule { }
