import { createPlatform, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCustomerComponent } from './customer/create-customer/create-customer.component';
import { ListCustomerComponent } from './customer/list-customer/list-customer.component';
import { UpdateCustomerComponent } from './customer/update-customer/update-customer.component';
import { ViewCustomerComponent } from './customer/view-customer/view-customer.component';

const routes: Routes = [
  {
    path: 'customer',
    component: ListCustomerComponent,
    data: { title: 'List customers'}
  },
  {
    path: 'create-customer',
    component: CreateCustomerComponent,
    data: { title: 'Create customer' }
  },
  {
    path: 'update-customer/:id',
    component: UpdateCustomerComponent,
    data: { title: 'Update customer' }
  },
  {
    path: 'view-customer/:id',
    component: ViewCustomerComponent,
    data: { title: 'View customer' }
  },
  {
    path: '',
    redirectTo: '/customer',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
