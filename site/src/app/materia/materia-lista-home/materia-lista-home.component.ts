import { Component, OnInit } from '@angular/core';
import { MateriaListaModel } from '../../models/materiaListaModel';
import { MateriaService } from '../../services/materia.service';

declare var jquery: any;
declare var $: any;
declare var AOS: any;

@Component({
  selector: 'app-materia-lista-home',
  templateUrl: './materia-lista-home.component.html',
  styleUrls: ['./materia-lista-home.component.css']
})
export class MateriaListaHomeComponent implements OnInit {
  lan: string;

  materias: Array<MateriaListaModel> = new Array<MateriaListaModel>();
  constructor(private materiaService: MateriaService) { }

  ngOnInit() {
    this.lan = localStorage.getItem('lan');
    AOS.init({
      easing: 'ease-in-out-quart',
    });
    this.materiaService.listaHome(26, 5).subscribe(dados => this.preencheMateria(dados));
  }

  preencheMateria(dados) {
    this.materias = dados;
  }


}
