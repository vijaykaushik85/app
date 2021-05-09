import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ContactD= [
    {ConIcon:'fa fa-map-marker',conDEl:'Our Address',conLO:'New York, NY 10010, United States',lastIcon:'fa fa-map-marker'},

    {ConIcon:'fa fa-phone',conDEl:'Contact',conLO:'Mobile: (+44) - 45789 - 5789',lastIcon:'fa fa-phone'},

    {ConIcon:'fa fa-history',conDEl:'Hours of Operation',conLO:'Monday - Friday: 09:00 - 20:00',lastIcon:'fa fa-history'},
  ]

}
