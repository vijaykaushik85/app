import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const approutes: Routes = [
  {path:'', redirectTo:'home' , pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'about', component:AboutComponent},
  {path:'contact', component:ContactComponent},
  {path:'blog', component:BlogComponent},
  {path:'login', component:LoginComponent},
  {path:'service', loadChildren:() => import('./service/service.module').then(m => m.ServiceModule)},
  {path:'casestudy', loadChildren:() => import('./casestudy/casestudy.module').then(m => m.CasestudyModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(approutes)],
  exports: [RouterModule
  ]
})
export class AppRoutingModule { }
