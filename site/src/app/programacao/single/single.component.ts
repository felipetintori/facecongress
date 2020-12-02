import { ProgramacaoService } from './../../services/programacao.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { EventoService } from '../../services/evento.service';
import { Programacao } from '../../models/programacao';

declare var jquery: any;
declare var $: any;
declare var Materialize: any;
declare var AOS: any;

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent implements OnInit {

  id: number;
  nome: string;
  tema: string;
  tipo: number;
  programacao: Programacao = new Programacao();
  main = <HTMLScriptElement>document.createElement('script');

  constructor(private route: ActivatedRoute,
    private programacaoService: ProgramacaoService ) {
    this.id = this.route.snapshot.queryParams.id;
    this.tema = this.route.snapshot.queryParams.tema;
    this.tipo = this.route.snapshot.queryParams.tipo;
    this.nome = this.route.snapshot.queryParams.nome;
  }
  ngOnInit() {
    // this._analytics.pageView('/programacao/single?id="' + this.id + '"&tema="' + this.tema + '"&tipo="' + this.tipo);
    $(document).ready(function () {
      $('.parallax').parallax();
      $('.tooltipped').tooltip();
      AOS.init({
        easing: 'ease-out-back',
      });
    });
    this.programacaoService.getProgramacao(this.id).subscribe((dados: Programacao) => this.preencheProgramacao(dados));
    this.main.setAttribute('src', 'https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.1/js/materialize.min.js');
  }

  redirect(id, tema, tipo) {
    window.location.href = '#/programacao/single?id=' + id + '&tema=' + tema + '&tipo=' + tipo;
    window.location.reload();
    $('html, body').animate({ scrollTop: 0 });
  }

  preencheProgramacao(dados: Programacao) {
    this.programacao = dados;
  
  }

}

