import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Customer } from 'src/model/customer';
import { CustomerService } from 'src/service/customer.service';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.scss']
})
export class ListCustomerComponent implements OnInit {

  customerForm: FormGroup;
  dataSource: Customer[] = [];
  name: string = '';

  constructor(private api: CustomerService, private formBuilder: FormBuilder) {
    this.customerForm = formBuilder.group({});
  }

  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomers() {
    this.api.getAll().subscribe(data => {
      this.dataSource = data;
      console.log(this.dataSource);
    });
  }

  findCustomerByName(name: string) {
    console.log('inputvalue', name);
    if (name === null || name === '') {
      this.getCustomers();
    } else {
      this.api.findCustomerByName(name).subscribe(data => {
        this.dataSource = data;
        console.log(data);
      });
    }
  }

}
