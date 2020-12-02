import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-internas',
  templateUrl: './menu-internas.component.html',
  styleUrls: ['./menu-internas.component.scss']
})
export class MenuInternasComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.dropdown-button').dropdown();
    $('.collapsible').collapsible();
    $('.button-collapse').sideNav({
      closeOnClick: true
    });
    
    $('.dropdown').dropdown();
    $(document).ready(function () {
        $(document).scroll(function() {
          var y = $(this).scrollTop();
          if (y > 100) {
            $('nav').addClass('nav-branco');
            $(".brand-logo").css('display', 'block');
            
            
          } else {
            $('nav').removeClass('nav-branco');
          }
        });    
      });
  }

}
