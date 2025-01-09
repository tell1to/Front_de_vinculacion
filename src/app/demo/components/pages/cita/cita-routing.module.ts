import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CitaComponent } from './cita.component';




@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: CitaComponent }
    ])],
    exports: [RouterModule]
})
export class CitaRoutingModule { }
