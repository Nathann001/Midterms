import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';
import { ProductsService } from './products.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'services-demo';

  public employees: {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
  }[] = [
    {
      id: 101,
      firstname: 'Joseph',
      lastname: 'Dizon',
      email: 'jdizon@hau.edu.ph',
    },
    {
      id: 102,
      firstname: 'James',
      lastname: 'Atienza',
      email: 'jatienza@hau.edu.ph',
    },
    {
      id: 103,
      firstname: 'John',
      lastname: 'Cena',
      email: 'jcena@hau.edu.ph',
    },
    {
      id: 104,
      firstname: 'Robert',
      lastname: 'Quintana',
      email: 'rquintana@hau.edu.ph',
    },
    {
      id: 105,
      firstname: 'Nathaniel',
      lastname: 'Sales',
      email: 'nssales@hau.edu.ph',
    }
  ];

  public products: {
    id: number;
    name: string;
    price: number;
    category: string;
  }[] = [
    { id: 1,
      name: 'Laptop',
      price: 1500,
      category: 'Electronics' 
    },
    { id: 2, 
      name: 'Phone', 
      price: 800, 
      category: 'Electronics' 
    },
    { id: 3, 
      name: 'Table', 
      price: 120, 
      category: 'Furniture' 
    },
    { id: 4, 
      name: 'Chair', 
      price: 75, 
      category: 'Furniture' 
    },
    { id: 5, 
      name: 'Headphones', 
      price: 200, 
      category: 'Accessories' 
    },
  ];

  constructor(
    private _employeeService: EmployeeService,
    private _productsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.employees = this._employeeService.getEmployees();

    this.products = this._productsService.getProducts();
  }
}
