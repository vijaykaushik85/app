import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CommondesignModule } from './sharedmodule/commondesign.module';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { BlogcardComponent } from './blog/blogcard/blogcard.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    BlogComponent,
    BlogcardComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CommondesignModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
