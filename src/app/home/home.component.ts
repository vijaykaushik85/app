import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
HostingDetails = [
{name:'Cloud Databases'},{name:'File Storage'},{name:'File Backups'},{name:'Email Servers'},{name:'Website Hosting'},
{name:'Forex Trading'},{name:'Remote Desktop'},{name:'Hybrid Cloud'}
]

DesignDetails =[
  {name:'Responsive Design'},{name:'React Development'},{name:'Apps Development'},{name:'Laravel Development'},
  {name:'UX/UI Design'},{name:'E-commerce Design'},
  {name:'Web Design'},{name:'Print Ready Design'}
]

FeatureDetails =[
  {Fimg:'assets/images/feature1.png' , Fname:'Incredible Infrastructure'} , {Fimg:'assets/images/feature2.png' , Fname:'Email Notifications'},
  {Fimg:'assets/images/feature3.png' , Fname:'Simple Dashboard'} , {Fimg:'assets/images/feature4.png' , Fname:'Information Retrieval'},
  {Fimg:'assets/images/feature5.png' , Fname:'Drag and Drop'} , {Fimg:'assets/images/feature6.png' , Fname:'Deadline Reminders'}
]

TeamDetails =[
  {Timg: 'assets/images/team1.jpg' , Tname: 'Merv Adrian' , Temp:'CEO & Founder'} , {Timg: 'assets/images/team2.jpg' , Tname: 'Kirk Borne',Temp:'UX/UI Designer'},
  {Timg: 'assets/images/team4.jpg' , Tname: 'Carla Gentry', Temp:'Web Developer'} , {Timg: 'assets/images/team4.jpg' , Tname: 'Marie Curie',Temp:'Support'}
]

}
console.log ("Home is working");