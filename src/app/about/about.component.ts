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

HistoryDate=[
  {Hyear:'2010', Hdate:'February 20th'},{Hyear:'2013', Hdate:'January 14th'},{Hyear:'2016', Hdate:'March 25th'}
  ,{Hyear:'2020', Hdate:'December 10th'}
]

Hdetails=[
  {hdetails:'Founded', Hpara:'Real innovations and a positive customer experience are the heart of successful communication. Lorem ipsum dolor sit amet', Himg:'assets/images/history1.jpg'}, 
  {hdetails:'Global Success', Hpara:'Real innovations and a positive customer experience are the heart of successful communication.', Himg:'assets/images/history2.jpg'},
  {hdetails:'Founded Data Center', Hpara:'Real innovations and a positive customer experience are the heart of successful communication.', Himg:'assets/images/history3.jpg'}, 
  {hdetails:'International Award', Hpara:' Lorem ipsum dolor sit amet, sectetur adipiscing elit, tempor incididunt ut labore et dolore magna.', Himg:'assets/images/history4.jpg'}

]

}
