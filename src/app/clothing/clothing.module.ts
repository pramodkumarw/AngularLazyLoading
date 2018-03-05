import { NgModule } from '@angular/core';
import { Routes,RouterModule } from "@angular/router";
import {ClothingComponent} from "./clothing.component"

let routes:Routes=[
  {
    path:"" , component:ClothingComponent
  }
];


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  declarations: [ ClothingComponent]
})
export class ClothingModule { }
