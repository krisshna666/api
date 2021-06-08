import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AddproductsComponent} from '../addproducts/addproducts.component'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  isstyle:boolean=false;
islucks:boolean=false;


sri()
{
this.isstyle=true;
}
  constructor() { }
krish(){
 this.islucks=true;

  
}
  ngOnInit(): void {
  }

}
