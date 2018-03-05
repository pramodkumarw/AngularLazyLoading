import { NgModule } from '@angular/core';
import { ElectronicComponent } from "./electronic.component";
import {  Routes,RouterModule} from "@angular/router";

let routes:Routes=[
  { 
    path:"",
    component:ElectronicComponent
  }
]
@NgModule({
  imports: [    
    RouterModule.forChild(routes)
  ],
  declarations: [ElectronicComponent]
})
export class ElectronicModule { }
