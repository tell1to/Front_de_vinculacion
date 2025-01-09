import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewHistoryDemoComponent } from './new_historydemo.component';
import { NewHistoryDemoRoutingModule } from './new_historydemo-routing.module';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { InputTextareaModule } from 'primeng/inputtextarea';

@NgModule({
    declarations: [NewHistoryDemoComponent],
    imports: [
        CommonModule,
        NewHistoryDemoRoutingModule,
        FormsModule,
        InputTextModule,
        DropdownModule,
        ButtonModule,
        InputTextareaModule
    ]
})
export class NewHistoryDemoModule { }
