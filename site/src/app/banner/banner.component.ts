import { Component, OnInit } from '@angular/core';
declare var cbpBGSlideshow:any;
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(function() {
      cbpBGSlideshow.init();
    });
  }

}
