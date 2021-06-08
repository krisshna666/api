import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogConfig,MatDialog} from '@angular/material/dialog';
import { HttpComponent } from './http/http.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  title = 'uidesign';
 Style:boolean=false;
 SH:boolean=true;
 surname="";
 constructor(private popups:MatDialog,private routing:Router){}
 

 btn()
 {
  this.popups.open(HttpComponent);
 }
srikrish()
{
  this.Style=true;
}
sree()
{
this.SH=!this.SH;
}


}


