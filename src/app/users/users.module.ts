import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersListingComponent } from './pages/users-listing/users-listing.component';
import { UsersLayoutComponent } from './users-layout/users-layout.component';
import { TableModule } from 'primeng/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule,
    TableModule,
    FormsModule, ReactiveFormsModule
  ],
  declarations: [UsersListingComponent, UsersLayoutComponent]
})
export class UsersModule { }
