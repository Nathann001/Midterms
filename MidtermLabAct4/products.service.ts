import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor() {}

  getProducts() {
    return [
      { id: 1,
        name: 'Laptop',
        price: 50000,
        category: 'Electronics' 
      },
      { id: 2, 
        name: 'Phone', 
        price: 20000, 
        category: 'Electronics' 
      },
      { id: 3, 
        name: 'Table', 
        price: 5000, 
        category: 'Furniture' 
      },
      { id: 4, 
        name: 'Chair', 
        price: 3000, 
        category: 'Furniture' 
      },
      { id: 5, 
        name: 'Headphones', 
        price: 5000, 
        category: 'Accessories' 
      },
    ];
  }
}
