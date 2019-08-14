import { Component } from "@angular/core";
import example from "../../api/products/products.json";
import { IProduct } from "./product";
import { ValueConverter } from "@angular/compiler/src/render3/view/template";

@Component({
  selector: "pm-products",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent {
  show: boolean = false;
  imageWidth: number = 50;
  imageMargin: number = 2;

  pageTitle: string =
    "This is the new page title. I can make it whatever I want by changing it in the class object on the product-list component";

    _listFilter:string;
get listFilter():string{
    return this._listFilter;
}
set listFilter(value:string){
    this._listFilter=value;
    this.filteredProducts=this.listFilter ? this.performFilter(this.listFilter):this.products
}

  getYear() {
    let y = new Date();
    let o = y.getFullYear();
    return o;
  }

  toggleEvent() {
    this.show = !this.show;
  }


filteredProducts:IProduct[];
products: IProduct[] = example;


constructor(){
    this.filteredProducts=this.products;
    this.listFilter='cart';
}
performFilter(filterBy:string):IProduct[]{
    filterBy= filterBy.toLocaleLowerCase();
   return this.products.filter((product:IProduct)=>product.productName.toLocaleLowerCase().indexOf(filterBy)!==-1)

}
}