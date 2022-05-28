import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
currentItem: any;
currentStyles: any;
default: any = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aliquam ad temporibus quae voluptatum autem ullam necessitatibus magni facere porro praesentium ducimus quos pariatur ex, fugit dolorum, voluptatibus molestiae corrupti.Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aliquam ad temporibus quae voluptatum autem ullam necessitatibus magni facere porro praesentium ducimus quos pariatur ex, fugit dolorum, voluptatibus molestiae corrupti.Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aliquam ad temporibus quae voluptatum autem ullam necessitatibus magni facere porro praesentium ducimus quos pariatur ex, fugit dolorum, voluptatibus molestiae corrupti.Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aliquam ad temporibus quae voluptatum autem ullam necessitatibus magni facere porro praesentium ducimus quos pariatur ex, fugit dolorum, voluptatibus molestiae corrupti.Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aliquam ad temporibus quae voluptatum autem ullam necessitatibus magni facere porro praesentium ducimus quos pariatur ex, fugit dolorum, voluptatibus molestiae corrupti.Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aliquam ad temporibus quae voluptatum autem ullam necessitatibus magni facere porro praesentium ducimus quos pariatur ex, fugit dolorum, voluptatibus molestiae corrupti.Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aliquam ad temporibus quae voluptatum autem ullam necessitatibus magni facere porro praesentium ducimus quos pariatur ex, fugit dolorum, voluptatibus molestiae corrupti.Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aliquam ad temporibus quae voluptatum autem ullam necessitatibus magni facere porro praesentium ducimus quos pariatur ex, fugit dolorum, voluptatibus molestiae corrupti.'
  constructor() { 
    this.currentStyles = {
    'background-color':  'green',
    'color': 'white',
    'padding': '40px',
    'font-size': '22px',
    'font-family': 'Helvetica Neu'
  };
  }

  ngOnInit(): void {
  }
setUppercaseName(event:any){
  this.currentItem = event
}
}
