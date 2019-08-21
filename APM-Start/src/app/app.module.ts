import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import {HttpClientModule} from "@angular/common/http"

import { AppComponent } from "./app.component";
import { ProductListComponent } from "./products/product-list.component";
import {ConverToSpacesPipe} from "./shared/convert-to-space.pipe";
import {StarComponent} from "./shared/star.component"

@NgModule({
  declarations: [AppComponent, ProductListComponent,ConverToSpacesPipe,StarComponent],
  imports: [BrowserModule, FormsModule,HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
