import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { RouterModule } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';


@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    CommonModule,
    CarouselModule,
    RouterModule.forChild([
      { path: "", component: ProductsComponent }
    ])
  ],exports: [
    ProductsComponent
  ]
})
export class ProductsModule { }
