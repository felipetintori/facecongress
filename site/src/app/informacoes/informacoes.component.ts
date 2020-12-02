import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from '../services/analytics.service';
import { Router, NavigationEnd } from '@angular/router';
import { Meta } from '@angular/platform-browser';
declare var jquery: any;
declare var $: any;
declare var Materialize: any;
declare var AOS: any;

@Component({
  selector: 'app-informacoes',
  templateUrl: './informacoes.component.html',
  styleUrls: ['./informacoes.component.scss']
})
export class InformacoesComponent implements OnInit {

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
    this._analytics.pageView('/informacoes');
    AOS.init({
      easing: 'ease-in-out-quart',
    });    
    $(document).ready(function () {
      $('html, body').animate({ scrollTop: 0 });
      
    });
  }

}
