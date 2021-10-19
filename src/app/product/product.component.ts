import { Component, OnInit } from '@angular/core';
import { Product } from './product';
declare let alertify:any;
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }
  title = "Ürün listesi"
  filterText=""
  products : Product[]=[
    {id: 1, name: "Laptop", price: 23568, categoryId:1, description: "Lenovo", imageUrl:"https://images.unsplash.com/photo-1533740566848-5f7d3e04e3d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80" },
    {id: 2, name: "Mouse", price: 238, categoryId:1, description: "Logitech", imageUrl:"https://images.unsplash.com/photo-1605773527852-c546a8584ea3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"}
  ]

  ngOnInit(): void {
  }
  addToCart(product:Product){
    alertify.success("added")
  }
}
