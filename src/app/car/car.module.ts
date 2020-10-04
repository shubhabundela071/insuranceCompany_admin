import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarRoutingModule } from './car-routing.module';
import { CarListingComponent } from './pages/car-listing/car-listing.component';
import { CarLayoutComponent } from './car-layout/car-layout.component';
import { TableModule } from 'primeng/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    CarRoutingModule,
    TableModule,
    FormsModule, ReactiveFormsModule
  ],
  declarations: [CarListingComponent, CarLayoutComponent]
})
export class CarModule { }
