import { Component } from "@angular/core";
import example from "../../api/products/products.json";
import { IProduct } from "./product";

@Component({
  selector: "pm-products",
  templateUrl: "./product-list.component.html"
})
export class ProductListComponent {
  show: boolean = false;
  imageWidth: number = 50;
  imageMargin: number = 2;
  listFilter: string = "";

  pageTitle: string =
    "This is the new page title. I can make it whatever I want by changing it in the class object on the product-list component";

  getYear() {
    let y = new Date();
    let o = y.getFullYear();
    return o;
  }

  toggleEvent() {
    this.show = !this.show;
  }

  products: IProduct[] = example;
}
