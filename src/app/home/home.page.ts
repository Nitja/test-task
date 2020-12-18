import { Component } from "@angular/core";
import { DatabaseService } from "../database/database.service";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  products;

  constructor(private database: DatabaseService) {}

  ionViewDidEnter() {
    // this.products = JSON.parse(localStorage.getItem("products")) || [];
    this.database.getProducts().subscribe((response) => {
      this.products = response || [];
    });
  }

  onMassDelete() {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].isChecked) {
        this.products.splice(i, 1);
        i--;
      }
    }
    //localStorage.setItem("products", JSON.stringify(this.products));
    this.database.synchronizeProducts(this.products);
  }
}
