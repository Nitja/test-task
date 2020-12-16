import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { DatabaseService } from "../database/database.service";

@Component({
  selector: "app-add",
  templateUrl: "./add.page.html",
  styleUrls: ["./add.page.scss"],
})
export class AddPage {
  newProduct;

  constructor() {}

  onSaveClick(form: NgForm) {
    console.log(form.value);

    this.newProduct = form.value;

    let products = JSON.parse(localStorage.getItem("products")) || [];
    products.push(form.value);
    localStorage.setItem("products", JSON.stringify(products));

    console.log(products);
  }
}
