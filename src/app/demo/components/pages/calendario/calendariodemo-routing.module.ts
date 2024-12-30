import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CalendarDemoComponent } from './calendariodemo.component';

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: CalendarDemoComponent }
  ])],
  exports: [RouterModule]
})
export class CalendarDemoRoutingModule { }
