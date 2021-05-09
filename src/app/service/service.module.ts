import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ServiceComponent } from './service.component';
import { ServicedetailsComponent } from './servicedetails/servicedetails.component';
import { CommondesignModule } from '../sharedmodule/commondesign.module';

const serviceroutes: Routes = [
  {path:'', children:[
    {path:'', component:ServiceComponent},
    {path:'servicedetails', component:ServicedetailsComponent},
  ]},
]

@NgModule({
  declarations: [
    ServiceComponent,
    ServicedetailsComponent,
  ],
  imports: [
    CommonModule,
    CommondesignModule,
    RouterModule.forChild(serviceroutes),
  ]
})
export class ServiceModule { }
console.log ('service module working')