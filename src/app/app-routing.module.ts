import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { LandingpageComponent } from './component/landingpage/landingpage.component';
import { TabledetailComponent } from './component/tabledetail/tabledetail.component';

const routes: Routes = [
  {path: '', component: LandingpageComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'details', component: TabledetailComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
