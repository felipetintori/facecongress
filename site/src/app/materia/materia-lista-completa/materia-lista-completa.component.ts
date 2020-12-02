import { MateriaService } from './../../services/materia.service';
import { Component, OnInit } from '@angular/core';
import { MateriaListaModel } from '../../models/materiaListaModel';
import { AnalyticsService } from '../../services/analytics.service';

declare var jquery: any;
declare var $: any;
declare var AOS: any;

@Component({
  selector: 'app-materia-lista-completa',
  templateUrl: './materia-lista-completa.component.html',
  styleUrls: ['./materia-lista-completa.component.css']
})
export class MateriaListaCompletaComponent implements OnInit {
  lan: string;
  materias: Array<MateriaListaModel> = new Array<MateriaListaModel>();
  
  constructor(private materiaService: MateriaService,
    private _analytics: AnalyticsService) { }

  ngOnInit() {
    this._analytics.pageView('/todas-noticias');
    $(document).ready(function () {
    $('html, body').animate({ scrollTop: 0 });
    $('.parallax').parallax();
  });
    this.lan = localStorage.getItem('lan');
    AOS.init({
      easing: 'ease-in-out-quart',
    });
    this.materiaService.listaAtivosSimples(26).subscribe(dados => this.preencheMateria(dados));
  }

  preencheMateria(dados) {
    this.materias = dados;
   }

}


