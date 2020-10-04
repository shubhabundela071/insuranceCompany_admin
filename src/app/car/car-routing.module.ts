import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarLayoutComponent } from './car-layout/car-layout.component';
import { CarListingComponent } from './pages/car-listing/car-listing.component';
const routes: Routes = [
  {
    path: '',
    component: CarLayoutComponent,
    children: [
      {
        path: 'car',
        component: CarListingComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarRoutingModule {}
