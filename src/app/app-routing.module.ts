import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { ProductComponent } from './product/product.component';

//import { AuthGuard } from './core/guards/auth.guard';
//import { InternetRequiredGuard } from './core/guards/internet-required.guard';

const routes: Routes = [
    {path : '', component : DashboardComponent},
    {path : 'user', component : UserComponent},
    {path : 'product', component : ProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
