import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HistoryDemoComponent } from './historydemo.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: HistoryDemoComponent }
    ])],
    exports: [RouterModule]
})
export class HistoryDemoRoutingModule { }
