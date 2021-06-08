import { Component, OnInit } from '@angular/core';
import {HttpService} from '../https.service';
import {IProduct} from '../Elproduct.interface';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {
    data:any;
    data2:any;
  title='my-app';

  constructor(private _httpservice:HttpService) {
    this._httpservice.getProducts()
    .subscribe((data) =>{
  
     
  this.data=data;
  console.log(this.data);

    })
    this._httpservice.getProducts2()
    .subscribe((data2) =>{
  
     
  this.data2=data2;
  console.log(this.data2);

    })
 
   }

  ngOnInit(): void {
  }

}

