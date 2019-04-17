import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "list-app";
  items = [1];

  addList() {
    this.items = [...this.items, 1];
  }
  onDeleted(val) {
    this.items.pop();
  }
}
