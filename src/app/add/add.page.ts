import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { DatabaseService } from "../database/database.service";

@Component({
  selector: "app-add",
  templateUrl: "./add.page.html",
  styleUrls: ["./add.page.scss"],
})
export class AddPage {

  notUnique = false;

  constructor(private database: DatabaseService) {}

  onSaveClick(form: NgForm) {

    let products = JSON.parse(localStorage.getItem("products")) || [];
    products.push(form.value);
    localStorage.setItem("products", JSON.stringify(products));

    this.database.synchronizeProducts(products);

    form.reset();
  }

  ckechUniquness(sku) {
    this.notUnique = false;
    let products = JSON.parse(localStorage.getItem("products")) || [];
    products.forEach(product => {
      if(product.sku == sku) {
        this.notUnique = true;
      }
    });
  }
}
