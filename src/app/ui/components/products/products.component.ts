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
  data: any;
  constructor(private productService: ProductService) { }

  async ngOnInit() {
    this.subscription = (await this.productService.getProducts()).subscribe(
      (response) => {
        this.data = response;
        console.log(this.data);

      },
      (error) => {
        console.error(error);

      }
    );
  }

}
