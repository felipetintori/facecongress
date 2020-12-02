import { Component, OnInit } from '@angular/core';
import { TimelineMax, CSSPlugin, ScrollToPlugin, Draggable, Power3, TweenMax } from "gsap/all"; 
@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const fLogo1 = document.getElementById("fLogo1");
    const aLogo1 = document.getElementById("aLogo1");
    const cLogo1 = document.getElementById("cLogo1");
    const eLogo1 = document.getElementById("eLogo1");
    const rectDark1 = document.getElementById("rectDark1");
    const dia1 = document.getElementById("dia1");
    const conceito1 = document.getElementById("conceito1");
    const title1 = document.querySelectorAll("#title1 path");
    const tl = new TimelineMax();
        tl
        .delay(1)
        .from(rectDark1, 0.2,{opacity:0, scale:0.4, transformOrigin:"center center"})
        .from(fLogo1, 0.4,{opacity:0, x:-100})
        .from(aLogo1, 0.4,{opacity:0, x:-100})
        .from(cLogo1, 0.4,{opacity:0, y:-100})            
        .from(eLogo1, 0.4,{opacity:0, x:-100})
        .staggerFrom(title1, 0.1,{opacity:0, y:10}, 0.1)
        .from(conceito1, 0.3,{opacity:0, y:50})
        .from(dia1, 0.3,{opacity:0, y:50})
  }

}
