import { Component } from '@angular/core';
import { AnalyticsService } from './services/analytics.service';
import { Router, NavigationEnd } from '@angular/router';
import { Meta } from '@angular/platform-browser';
declare var jquery: any;
declare var $: any;
declare var Materialize: any;
declare var AOS: any; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'site';
  
  contador = <HTMLScriptElement>document.createElement('script');
  parametros: string;

  constructor(private router: Router,
    private _analytics: AnalyticsService,
    private meta: Meta){
    this.meta.addTags([
      { name: 'description', content: '' },
      { name: 'keywords', content: '' },
      { name: 'og:image', content: '' }
    ]);
  };
  ngOnInit() {
    this._analytics.pageView('/home');
    this.router.events.subscribe((evt: any) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
        $('html, body').animate({ scrollTop: 0 }, 600);
        $('.parallax').parallax();
    });
    $(document).ready(function() {
      $('.btn-floating').click(function() {
          $('html, body').animate({scrollTop: 0}, 800);
      });
      $('.brand-logo').click(function () {
        $('html, body').animate({ scrollTop: 0 });
      });
      AOS.init({
        easing: 'ease-in-out-quart',
      });
    });
    $(document).scroll(function() {
      var y = $(this).scrollTop();
      if (y > 400) {
        $('.brand-logo').show();
      } else {
        $('.brand-logo').hide();
      }
    });
    $(document).scroll(function() {
      var y = $(this).scrollTop();
      if (y > 400) {
        $('.fixed-action-btn').show();
      } else {
        $('.fixed-action-btn').hide();
      }
    });
    $(document).scroll(function() {
      var y = $(this).scrollTop();
      if (y > 1050) {
        $('.countdown-fixed').show();
      } else {
        $('.countdown-fixed').hide();
      }
    });
   
    this.contador.setAttribute('src', '/assets/js/contador.js');
    
    document.getElementsByTagName('body')[0].appendChild(this.contador)
  }
  // tslint:disable-next-line:use-life-cycle-interface
  ngOnDestroy() {
    document.getElementsByTagName('body')[0].removeChild(this.contador);
  }
}

