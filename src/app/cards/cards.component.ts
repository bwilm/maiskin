import { Component, OnInit } from '@angular/core';
import { Card } from './cards.models';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  public cards: {serviceName:string, description:string, price:number}[]=[

    {
    "serviceName": 'Eyebrow Wax',
    "price":8.00,
    "description":'Hot wax eyebrow hair removal '
    },
    {
    "serviceName": 'Upper Lip Hair Removal',
    "price":6.00,
    "description":'Hot wax upper lip hair removal'
    },
    {
    "serviceName": 'Armpit Hair Removal',
    "price":85.00,
    "description":'Hot wax armpit hair removal'
    },
    {
    "serviceName": 'Classic Extension Refill',
    "price":60.00,
    "description":'Classic single lash refill application for natural look'
    },
    {
    "serviceName": 'Classic Extension Full Set',
    "price":85.00,
    "description":'Classic single lash full set application for natural look'
    },

  ]

  constructor() { }

  ngOnInit(): void {


  }
    


}
