import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { DatabaseService } from "../database/database.service";

@Component({
  selector: "app-add",
  templateUrl: "./add.page.html",
  styleUrls: ["./add.page.scss"],
})
export class AddPage implements OnInit {
  products;
  notUnique = false;

  constructor(private database: DatabaseService) {}

  ngOnInit() {
    // this.products = JSON.parse(localStorage.getItem("products")) || [];
    this.database.getProducts().subscribe((response) => {
      this.products = response || [];
    });
  }

  onSaveClick(form: NgForm) {
    this.products.push(form.value);
    //localStorage.setItem("products", JSON.stringify(products));
    this.database.synchronizeProducts(this.products);

    form.reset();
  }

  ckechUniquness(sku) {
    this.notUnique = false;
    this.products.forEach((product) => {
      if (product.sku == sku) {
        this.notUnique = true;
      }
    });
  }
}
