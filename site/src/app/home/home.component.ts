import { Component, OnInit } from '@angular/core';
declare var jquery: any;
declare var $: any;
declare var Materialize: any;
declare var AOS: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
    
    AOS.init({
      easing: 'ease-in-out-quart',
    });
    $(document).ready(function () {
      $('html, body').animate({ scrollTop: 0 });
      
    });  
  }

}
