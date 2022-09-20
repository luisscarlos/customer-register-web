import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Phone } from 'src/model/phone';
import { CustomerService } from 'src/service/customer.service';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.scss']
})
export class UpdateCustomerComponent implements OnInit {

  customerForm: FormGroup;

  id: string = '';
  phones: Phone[] = [];

  constructor(
    private router: Router,
    public route: ActivatedRoute,
    private api: CustomerService,
    private fb: FormBuilder,
  ) {
    this.customerForm = fb.group({});
  }

  ngOnInit(): void {
    this.findCustomerById(this.route.snapshot.params['id']);
    this.customerForm = this.fb.group({
      'name': [null, Validators.required],
      'customerType': [null, Validators.required],
      'cpfCnpj': [null, Validators.required],
      'rgIe': [null],
      'active': [null],
      'phoneList': this.fb.array([]),
    })
  }

  findCustomerById(id: string) {
    this.api.findCustomerById(id).subscribe(data => {
      this.id = data.id;
      this.phones = data.phone;
      this.customerForm.setValue({
          name: data.name,
          customerType: data.customerType,
          cpfCnpj: data.cpfCnpj,
          rgIe: data.rgIe,
          active: data.active,
          phoneList: data.phone,
        });
    })
  }

  updateCustomer(form: NgForm) {
    this.api.updateCustomer(this.id, form)
    .subscribe(data => {
      this.router.navigate([`/view-customer/${this.id}`]);
    })
  }

}
