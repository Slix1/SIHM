import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ondemand',
  templateUrl: './ondemand.component.html',
  styleUrls: ['./ondemand.component.css']
})
export class OndemandComponent implements OnInit {

  constructor() { }

  public tab: string = 'ondemand';

  ngOnInit() {
  }

}
