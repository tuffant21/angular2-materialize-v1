import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-nav-title[navTitle]',
  templateUrl: './nav-title.component.html',
  styleUrls: ['./nav-title.component.css']
})
export class NavTitleComponent implements OnInit {

  @Input() navTitle: string;

  constructor() { }

  ngOnInit(): void {
  }

}
