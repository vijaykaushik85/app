import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

Experince= [
  {Eimg:'/assets/images/experience1.png', Edetail:'10 Years', EdetailIN:'On the market' },{Eimg:'/assets/images/experience1.png', Edetail:'45+',EdetailIN:'Team members' }
  ,{Eimg:'/assets/images/experience1.png', Edetail:'100%',EdetailIN:'Satisfaction rate' },{Eimg:'/assets/images/experience1.png', Edetail:'80%',EdetailIN:'Senior scientist' }
]

}
