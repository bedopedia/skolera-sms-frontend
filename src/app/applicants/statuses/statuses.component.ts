import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-statuses',
  templateUrl: './statuses.component.html',
  styleUrls: ['./statuses.component.scss']
})
export class StatusesComponent implements OnInit {

    repeater = [1,2,3,4,5,6,7,8]
  constructor() { }

  ngOnInit() {
  }

}
