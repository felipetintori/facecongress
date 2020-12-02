import { MateriaService } from './../../services/materia.service';
import { MateriaEvento } from './../../models/materiaEvento';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

declare var jquery: any;
declare var $: any;
declare var AOS: any;

@Component({
  selector: 'app-materia-single',
  templateUrl: './materia-single.component.html',
  styleUrls: ['./materia-single.component.css']
})
export class MateriaSingleComponent implements OnInit {
  lan: string;
  id: number;
  materia: MateriaEvento = new MateriaEvento();
  constructor(private materiaService: MateriaService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.lan = localStorage.getItem('lan');
    AOS.init({
      easing: 'ease-in-out-quart',
    });
    $(document).ready(function () {
      $('html, body').animate({ scrollTop: 0 });
      $('.parallax').parallax();
    });
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params['id'];
    });
    this.materiaService.getAtivo(this.id).subscribe(dados => this.preencheMateria(dados));
  }

  preencheMateria(dados) {
    this.materia = dados;
  }

}
