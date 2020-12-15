import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {

  constructor() { }

  ngOnInit() {
    //console.log();
  }

  onSubmit(form) {
    // let products = JSON.parse(localStorage.getItem("products")) || [];
    // products.push(form.value);
    // localStorage.setItem("products", JSON.stringify(products));
  }

  onSaveClick() {
    
  }
}
