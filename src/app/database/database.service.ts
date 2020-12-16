import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class DatabaseService {
  productsFromDatabase = [];

  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get(
      "https://test-task-66c3f-default-rtdb.europe-west1.firebasedatabase.app//products.json"
    );
  }

  synchronizeProducts(products: any[]) {
    this.http.put(
      "https://test-task-66c3f-default-rtdb.europe-west1.firebasedatabase.app//products.json",
      products
    ).subscribe();
  }
}
