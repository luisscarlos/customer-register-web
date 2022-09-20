import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from 'src/model/customer';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

const apiUrl = 'http://localhost:8080/api/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Customer[]> {
    return this.http.get<Customer[]>(apiUrl);
  }

  findCustomerById(id: string): Observable<Customer> {
    const url = `${apiUrl}/${id}`;

    return this.http.get<Customer>(url);
  }

  findCustomerByName(name: string): Observable<Customer[]> {
    const url = `${apiUrl}/search/${name}`;
    return this.http.get<Customer[]>(url);
  }

  saveCustomer(customer: any): Observable<Customer> {
    return this.http.post<Customer>(apiUrl, customer);
  }

  deleteCustomer(id: string): Observable<Customer> {
    const url = `${apiUrl}/${id}`;
    return this.http.delete<Customer>(url, httpOptions);
  }

  updateCustomer(id: string, customer: any): Observable<Customer> {
    const url = `${apiUrl}/${id}`;
    return this.http.put<Customer>(url, customer);
  }
}
