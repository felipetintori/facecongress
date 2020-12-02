import { Component, OnInit } from '@angular/core';
import { TimelineMax, CSSPlugin, ScrollToPlugin, Draggable, Power3, TweenMax } from "gsap/all"; 
@Component({
  selector: 'app-intro2',
  templateUrl: './intro2.component.html',
  styleUrls: ['./intro2.component.scss']
})
export class Intro2Component implements OnInit {

  constructor() { }

  ngOnInit() {
    const fLogo = document.getElementById("fLogo");
    const aLogo = document.getElementById("aLogo");
    const cLogo = document.getElementById("cLogo");
    const eLogo = document.getElementById("eLogo");
    // const rectDark = document.getElementById("rectDark");
    const dia = document.getElementById("dia");
    const conceito = document.getElementById("conceito");
    const title = document.querySelectorAll("#title path");
    const tl = new TimelineMax();
        tl
        .delay(1)
        // .from(rectDark, 0.2,{opacity:0, scale:0.4, transformOrigin:"center center"})
        .from(fLogo, 0.5,{opacity:0, x:-100})
        .from(aLogo, 0.5,{opacity:0, x:-100})
        .from(cLogo, 0.5,{opacity:0, y:-100})            
        .from(eLogo, 0.5,{opacity:0, x:-100})
        .staggerFrom(title, 0.1,{opacity:0, y:10}, 0.1)
        .from(conceito, 0.5,{opacity:0, y:50})
        .from(dia, 0.5,{opacity:0, y:50})
  }

}
