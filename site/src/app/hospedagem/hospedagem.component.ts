import { Component, OnInit } from '@angular/core';
declare var jquery: any;
declare var $: any;
declare var Materialize: any;
declare var AOS: any;

@Component({
  selector: 'app-hospedagem',
  templateUrl: './hospedagem.component.html',
  styleUrls: ['./hospedagem.component.scss']
})
export class HospedagemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    AOS.init({
      easing: 'ease-in-out-quart',
    }); 
    $(document).ready(function(){
      $('.collapsible').collapsible();
    });
  }

}
