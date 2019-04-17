import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
  selector: "list-items",
  templateUrl: "./list-items.component.html",
  styleUrls: ["./list-items.component.css"]
})
export class ListItemsComponent implements OnInit {
  @Output() itemDeleted = new EventEmitter();
  valueDate = new Date();
  constructor() {}

  ngOnInit() {}

  onDelete() {
    this.itemDeleted.emit("deleted");
    console.log("Deleted");
  }
}
