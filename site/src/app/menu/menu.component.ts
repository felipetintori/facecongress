import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.dropdown-button').dropdown();
    $('.collapsible').collapsible();
    $('.button-collapse').sideNav({
      closeOnClick: true
    });
    
    $(document).scroll(function() {
      var y = $(this).scrollTop();
      if (y > 400) {
        $('.brand-logo.menu').show();
      } else {
        $('.brand-logo.menu').hide();
      }
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
