import { Component } from "@angular/core";

@Component({
  selector: "pm-root",
  template: `
    <div class="contain">
      <pm-products></pm-products>
    </div>
  `,
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  pageTitle: string = "This is the title";
}
