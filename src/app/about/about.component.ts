import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private data: DataService) { }

  ngOnInit() {
  }

  // TODO: fix this it doesn't work
  firstClick() {
    this.data.showOnClick();
  }
}
