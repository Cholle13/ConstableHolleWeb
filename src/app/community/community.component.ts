import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.scss']
})
export class CommunityComponent implements OnInit {

    page = 1;
  constructor() { }

  ngOnInit() {
  }

    scroll(el) {
        el.scrollIntoView({behavior: "smooth", inline: "nearest"});
    }

}
