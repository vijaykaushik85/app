import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-casestudy',
  templateUrl: './casestudy.component.html',
  styleUrls: ['./casestudy.component.css']
})
export class CasestudyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

CaseAll =[
  {Cimg:'/assets/images/case1.jpg' , Cname:'Movie Recommendation', Ctopic:'System Project'},
  {Cimg:'/assets/images/case2.jpg' , Cname:'Customer Segmentation', Ctopic:'Machine Learning'},
  {Cimg:'/assets/images/case3.jpg' , Cname:'Data Analysis', Ctopic:'Web Project'},
  {Cimg:'/assets/images/case4.jpg' , Cname:'Detection Project', Ctopic:'Programming'},
  {Cimg:'/assets/images/case5.jpg' , Cname:'Data Scientist', Ctopic:'Data Science'},
  {Cimg:'/assets/images/case6.jpg' , Cname:'Benefits Research', Ctopic:'Science Projects'},
]

}
