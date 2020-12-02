import { Component, OnInit } from '@angular/core';
import { TimelineMax, CSSPlugin, ScrollToPlugin, Draggable, Power3, TweenMax } from "gsap/all"; 

@Component({
  selector: 'app-abertura',
  templateUrl: './abertura.component.html',
  styleUrls: ['./abertura.component.scss']
})
export class AberturaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const fLogo3 = document.getElementById("fLogo3");
    const aLogo3 = document.getElementById("aLogo3");
    const cLogo3 = document.getElementById("cLogo3");
    const eLogo3 = document.getElementById("eLogo3");
    
    const tl = new TimelineMax({repeat:1, yoyo:true});
        tl
        .delay(1)
        
        .from(fLogo3, 0.5,{opacity:0, x:-100})
        .from(aLogo3, 0.5,{opacity:0, x:-100})
        .from(cLogo3, 0.5,{opacity:0, y:-100})            
        .from(eLogo3, 0.5,{opacity:0, x:-100}) 
        
        setTimeout(function () {
          window.top.location.href = "#/home"
      }, 6000);  
  }

}
