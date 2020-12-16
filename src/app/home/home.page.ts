import { Component } from '@angular/core';
import { DatabaseService } from "../database/database.service";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  products;
  
  constructor() {}

  ionViewDidEnter() {
    // this.products = [
    //     { sku: "JVC200123", name: 'Acme DISC', price: '100', type: "DVD-disk", attribute: "700", unit: "MB" },
    //     { sku: "JVC200123", name: 'Acme DISC', price: '100', type: "DVD-disk", attribute: "700", unit: "MB"  },
    //     { sku: "JVC200123", name: 'Acme DISC', price: '100', type: "DVD-disk", attribute: "700", unit: "MB"  }
    // ];
    //tut schitat iz bazq || [] 
    //console.log (this.products);

    this.products = JSON.parse(localStorage.getItem("products")) || [];
}

}
