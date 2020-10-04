import { Routes, RouterModule } from '@angular/router';

//Route for content layout with sidebar, navbar and footer.

export const Full_ROUTES: Routes = [
  {
    path: 'dashboard',
    loadChildren: './dashboard/dashboard.module#DashboardModule'
  },
  {
    path: '',
    loadChildren:
      './users/users.module#UsersModule'
  },
  {
    path: '',
    loadChildren:
      './car/car.module#CarModule'
  }
  
];
