import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatIconModule} from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatBadgeModule} from '@angular/material/badge';
import { ProductsComponent } from './products/products.component';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import { AddproductsComponent } from './addproducts/addproducts.component';
import {Router,Routes,RouterModule} from '@angular/router';
// import {HttpClient,HttpClientModule} from '@angular/common/http';
import {HttpClientModule} from '@angular/common/http'
import { HttpComponent } from './http/http.component';
import {IProduct} from './Elproduct.interface';
import {MatDialogModule} from '@angular/material/dialog'
import {FormsModule} from '@angular/forms';
import { ChildComponent } from './child/child.component';

const routes : Routes = [
  {path: 'navi',component: AddproductsComponent} ,
     {path:'header',component: HttpComponent}
];
    
 
@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    AddproductsComponent,
    HttpComponent,
    ChildComponent
    // HttpClientModule,
    // HttpClient
    
 
    
  
   
  ],
  entryComponents:[HttpComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSelectModule,
    RouterModule.forRoot(routes),
    FormsModule,
 MatIconModule,
 MatSliderModule,
 MatBadgeModule,
 MatInputModule,
 HttpClientModule,
 MatDialogModule
//  HttpClientModule,
//     HttpClient

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
