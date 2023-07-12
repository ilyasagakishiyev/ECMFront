import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductService } from 'src/app/Services/Products/ProductService';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  private subscription: Subscription | undefined;
  products: any;
  constructor(private productService: ProductService) { }

  async ngOnInit() {
    this.subscription = (await this.productService.getProducts()).subscribe(
      (response) => {
        this.products = response;
        console.log(this.products);

      },
      (error) => {
        console.error(error);

      }
    );
  }

}
