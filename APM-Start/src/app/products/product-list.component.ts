import { Component } from "@angular/core";
import example from "../../api/products/products.json";

@Component({
  selector: "pm-products",
  templateUrl: "./product-list.component.html"
})
export class ProductListComponent {
  pageTitle: string =
    "This is the new page title. I can make it whatever I want by changing it in the class object on the product-list component";

  getYear() {
    let y = new Date();
    let o = y.getFullYear();
    return o;
  }

  products: any[] = example;
}
