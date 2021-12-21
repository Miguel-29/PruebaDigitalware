import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PilotsRoutingModule } from './pilots-routing.module';
import { PilotsComponent } from './pilots.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RegisterPilotComponent } from 'src/app/components/register-pilot/register-pilot.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    PilotsComponent,
    RegisterPilotComponent
  ],
  imports: [
    CommonModule,
    PilotsRoutingModule,

    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatMenuModule,
    MatDialogModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    HttpClientModule    
  ]
})
export class PilotsModule { }
