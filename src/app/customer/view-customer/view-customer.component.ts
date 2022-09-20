import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/model/customer';
import { CustomerService } from 'src/service/customer.service';

@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.scss']
})
export class ViewCustomerComponent implements OnInit {

  customer: Customer = {
    id: '',
    name: '',
    created: new Date,
    customerType: '',
    cpfCnpj: '',
    rgIe: '',
    active: '',
    phone: new Array,
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private api: CustomerService,
  ) { }

  ngOnInit(): void {
    this.findCustomerById(this.route.snapshot.params['id']);
  }

  findCustomerById(id: string) {
    this.api.findCustomerById(id).subscribe(data => {
      this.customer = data;
      console.log(this.customer);
    });
  }

  deleteCustomer(id: string) {
    this.api.deleteCustomer(id).subscribe(data => {
      this.router.navigate(['/customer']);
    })
  }

}
