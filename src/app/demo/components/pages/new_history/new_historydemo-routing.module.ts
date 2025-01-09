import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NewHistoryDemoComponent } from './new_historydemo.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: NewHistoryDemoComponent }
    ])],
    exports: [RouterModule]
})
export class NewHistoryDemoRoutingModule { }
