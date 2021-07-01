import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { CreditArrangementComponent } from './components/credit-arrangement.component/credit-arrangement.component';

const routes: Routes = [
  {
    path: "",
    component: AdminComponent,
  },
  {
    path: "arrangement",
    component: CreditArrangementComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
