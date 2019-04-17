import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { ListItemsComponent } from "./list-items/list-items.component";
import { AngularFontAwesomeModule } from "angular-font-awesome";

@NgModule({
  declarations: [AppComponent, ListItemsComponent],
  imports: [BrowserModule, AngularFontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
