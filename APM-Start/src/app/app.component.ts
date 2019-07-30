import { Component } from "@angular/core";

@Component({
  selector: "pm-root",
  template: "<div><h1>First Component {{pageTitle}}</h1></div>"
})
export class AppComponent {
  pageTitle: String = "This is the title";
}
