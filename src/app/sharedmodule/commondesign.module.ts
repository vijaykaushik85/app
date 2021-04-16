import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InnertopComponent } from '../innertop/innertop.component';
import { HeaderComponent } from '../header/header.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { CardComponent } from '../card/card.component';


@NgModule({
  declarations: [
    InnertopComponent,
    HeaderComponent,
    FooterComponent,
    CardComponent

  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    InnertopComponent,
    HeaderComponent,
    FooterComponent,
    CardComponent

  ]
})
export class CommondesignModule { }
