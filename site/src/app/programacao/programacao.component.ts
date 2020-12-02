import { ProgramacaoService } from '../services/programacao.service';
import { Component, OnInit } from '@angular/core';
import { Programacao } from '../models/programacao';
import { AnalyticsService } from '../services/analytics.service';
import { Meta } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';

declare var jquery: any;
declare var $: any;
declare var Materialize: any;
declare var AOS: any;
@Component({
  selector: 'app-programacao',
  templateUrl: './programacao.component.html',
  styleUrls: ['./programacao.component.scss']
})
export class ProgramacaoComponent implements OnInit {
  id: number;
  nome: string;
  tema: string;
  tipo: number;
  main = <HTMLScriptElement>document.createElement('script');
  lan: string;

  progDia1: Array<Programacao> = new Array<Programacao>();
  progDia2: Array<Programacao> = new Array<Programacao>();
  progDia3: Array<Programacao> = new Array<Programacao>();

  constructor(private route: ActivatedRoute,
    private router: Router,
    private _analytics: AnalyticsService,
    private meta: Meta,
    private programacaoService: ProgramacaoService) {
      this.id = this.route.snapshot.queryParams.id;
      this.tema = this.route.snapshot.queryParams.tema;
      this.tipo = this.route.snapshot.queryParams.tipo;
      this.nome = this.route.snapshot.queryParams.nome;
      this.meta.addTags([
        { name: 'description', content: '' },
        { name: 'keywords', content: '' },
        { name: 'og:image', content: '' }
      ]);
     }

  ngOnInit() {
    
    $(".programacao-link-internas").addClass("active");
    $(document).ready(function () {
      $('html, body').animate({ scrollTop: 0 });
      $('.tooltipped').tooltip();
      $('.collapsible').collapsible();
      AOS.init({
        easing: 'ease-out-back',
      });  
      $(document).ready(function () {
        $('html, body').animate({ scrollTop: 0 });
        
      });
      
    });
    this.programacaoService.getAccordionDia(26, 26, 1).subscribe((dados: Array<Programacao>) => this.preencheDia1(dados));
    this.programacaoService.getAccordionDia(26, 27, 1).subscribe((dados: Array<Programacao>) => this.preencheDia2(dados));
    this.programacaoService.getAccordionDia(26, 28, 1).subscribe((dados: Array<Programacao>) => this.preencheDia3(dados));
    this.main.setAttribute('src', 'https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.1/js/materialize.min.js');
  }
  preencheDia1(dados: Array<Programacao>) {
    this.progDia1 = dados;
  }
  preencheDia2(dados: Array<Programacao>) {
    this.progDia2 = dados;
  }
  preencheDia3(dados: Array<Programacao>) {
    this.progDia3 = dados;
  }

  redirect(id, tema, tipo) {
    window.location.href = '#/programacao/single?id=' + id + '&tema=' + tema + '&tipo=' + tipo;
    
    window.location.reload();
    $('html, body').animate({ scrollTop: 0 });
  }
  

}
