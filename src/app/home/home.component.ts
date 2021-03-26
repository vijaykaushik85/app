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
{name:'Cloud Databases'},
{name:'File Storage'},
{name:'File Backups'},
{name:'Email Servers'},
{name:'Website Hosting'},
{name:'Forex Trading'},
{name:'Remote Desktop'},
{name:'Hybrid Cloud'}

]

}
