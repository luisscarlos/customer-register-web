import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListCustomerComponent } from './customer/list-customer/list-customer.component';
import { MenuComponent } from './menu/menu.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatListModule } from '@angular/material/list'
import { MatButtonModule } from '@angular/material/button'
import { MatInputModule } from '@angular/material/input'
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CustomerService } from 'src/service/customer.service';
import { CreateCustomerComponent } from './customer/create-customer/create-customer.component';
import { ViewCustomerComponent } from './customer/view-customer/view-customer.component';
import { UpdateCustomerComponent } from './customer/update-customer/update-customer.component';

@NgModule({
  declarations: [
    AppComponent,
    ListCustomerComponent,
    MenuComponent,
    CreateCustomerComponent,
    ViewCustomerComponent,
    UpdateCustomerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatCheckboxModule,
    HttpClientModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
