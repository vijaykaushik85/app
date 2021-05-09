import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CasestudyComponent } from './casestudy.component';
import { CommondesignModule } from '../sharedmodule/commondesign.module';
import { RouterModule, Routes } from '@angular/router';
import { CasedetailsComponent } from './casedetails/casedetails.component';

const caseroutes: Routes = [
  {path:'' , children: [
    {path:'' ,component:CasestudyComponent},
    {path:'casedetails', component:CasedetailsComponent},
  ]},

];

@NgModule({
  declarations: [
    CasestudyComponent,
    CasedetailsComponent,
  ],
  imports: [
    CommonModule,
    CommondesignModule,
    RouterModule.forChild(caseroutes),
  ]
})
export class CasestudyModule { }
console.log('case study working');