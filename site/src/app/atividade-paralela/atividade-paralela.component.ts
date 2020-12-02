import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from '../services/analytics.service';
import { Router, NavigationEnd } from '@angular/router';
import { Meta } from '@angular/platform-browser';
@Component({
  selector: 'app-atividade-paralela',
  templateUrl: './atividade-paralela.component.html',
  styleUrls: ['./atividade-paralela.component.scss']
})
export class AtividadeParalelaComponent implements OnInit {

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
    this._analytics.pageView('/atividade-paralela');
  }

}
