import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainPageComponent} from './main-page/main-page.component';
import {RouterModule, Routes} from "@angular/router";
import {NgxEchartsModule} from "ngx-echarts";


const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
  }
];

@NgModule({
  declarations: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgxEchartsModule,
  ]
})
export class DashboardModule {
}
