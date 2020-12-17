import { Component } from "@angular/core";
import { DatabaseService } from "../database/database.service";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  products;

  constructor() {}

  ionViewDidEnter() {
    this.products = JSON.parse(localStorage.getItem("products")) || [];
  }
  onMassDelete() {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].isChecked) {
        this.products.splice(i, 1);
        i--;
      }
    }
  }
}
