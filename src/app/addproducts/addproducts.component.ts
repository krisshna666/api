import { Component, OnInit } from '@angular/core';
import {Input} from '@angular/core';
@Component({
  selector: 'app-addproducts',
  templateUrl: './addproducts.component.html',
  styleUrls: ['./addproducts.component.css']
})
export class AddproductsComponent implements OnInit {

  constructor() { }
  @Input()model:string="hello";
  ngOnInit(): void {
  }

}
