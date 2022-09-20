import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/model/customer';
import { CustomerService } from 'src/service/customer.service';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.scss']
})
export class CreateCustomerComponent implements OnInit {

  customerForm: FormGroup;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private api: CustomerService,
    private formBuilder: FormBuilder
  ) {
    this.customerForm = formBuilder.group({
      phoneList: this.formBuilder.array([])
    });
  }

  ngOnInit(): void {
    this.customerForm = this.formBuilder.group({
      'name': [null, Validators.required],
      'customerType': [null, Validators.required],
      'cpfCnpj': [null, Validators.required],
      'rgIe': [],
      'active': true,
      'phoneList': this.formBuilder.array([
      ]),
    });
  }

  createCustomer(form: FormGroup) {
    this.api.saveCustomer(form).subscribe(data => {
      this.router.navigate(['/customer']);
      console.log(data);
    });
  }

  addPhone(): void {
    (this.customerForm.get('phoneList') as FormArray).push(
      this.formBuilder.control(null)
    );
  }

  removePhone(index: number) {
    (this.customerForm.get('phoneList') as FormArray).removeAt(index);
  }

  get getPhonesFormControl() {
    return this.customerForm.controls['phoneList'] as FormArray;
  }

}
