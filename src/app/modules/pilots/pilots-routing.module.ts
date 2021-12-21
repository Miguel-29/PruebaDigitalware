import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PilotsComponent } from './pilots.component';

const routes: Routes = [{ path: '', component: PilotsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PilotsRoutingModule { }
