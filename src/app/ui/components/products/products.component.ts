import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Subscription } from 'rxjs';
import { ProductService } from 'src/app/Services/Products/ProductService';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  @ViewChild('sliderContent') sliderElement: ElementRef;
  private subscription: Subscription | undefined;
  products: any;
  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 600,
    navText: ['&#8249', '&#8250;'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      760: {
        items: 3
      },
      1000: {
        items: 4
      }
    },
    nav: true
  }
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
