import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './views/home/home.component';
import  {ProductCrudComponent} from './views/product-crud/product-crud.component';
import {HelpComponent} from './views/help/help.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';

const routes: Routes = [
{
    path: "",
  component: HomeComponent
},
{
  path: "products",
  component: ProductCrudComponent
},
{
  path: "products/create",
  component: ProductCreateComponent
},
{
  path: "help",
  component: HelpComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
