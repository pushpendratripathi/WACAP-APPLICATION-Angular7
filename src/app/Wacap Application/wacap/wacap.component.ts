import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-wacap',
  templateUrl: './wacap.component.html',
  styleUrls: ['./wacap.component.css']
})
export class WacapComponent implements OnInit {
  langs: string[] = [
    'Canada',
    'USA',
    'German',
  ];
  lengths: string[] = [
    'duration',
    'period',
    'time'
     ];
  constructor() { }

  ngOnInit() {
  }

}
