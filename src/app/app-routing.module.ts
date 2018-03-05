import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import  { ClothingModule } from "./clothing/clothing.module";
import { ElectronicModule } from "./electronic/electronic.module";
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    {
        path:"home",
        component:HomeComponent
    },
    {
        path:"electronic",
        loadChildren:"./electronic/electronic.module#ElectronicModule"
    },
    {
        path:"clothing",
        loadChildren:"./clothing/clothing.module#ClothingModule"
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
