

  
/*smothscrollbar*/
import Scrollbar from 'smooth-scrollbar';

Scrollbar.init(document.querySelector('#my-scrollbar'));



/*Animaciones header*/
import anime from 'animejs/lib/anime.es.js';
import stagger from 'animejs/lib/anime.es.js'

let tl = anime.timeline({
  easing: "easeOutExpo",
  duration: 5400
})

tl.add({
  targets: ".container-header",
  scaleX: [2, 1],
  duration: 800
})
tl.add({
  targets: ".inner__elements",
  opacity:[0,1],
  translateY: [500, 0],
  duration: 1500,
  delay: anime.stagger(100, {from: 'last'})
})
tl.add({
  targets: ".presentation-title",
  translateX: [300,0],
  opacity:[0,1],
  duration: 3000,
  delay: anime.stagger(100) 
})

/*SCROLL MAGIC MENU*/

import ScrollMagic  from 'ScrollMagic';
import addIndicators from '../node_modules/scrollmagic/scrollmagic/minified/plugins/debug.addIndicators.min.js'

var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({
  triggerElement: ".container-menu",
  triggerHook: .3,
  reverse: false
})
.setClassToggle(".line-horizontal", "spawn__line-horizontal")
.addIndicators()
.addTo(controller);

var scene2 = new ScrollMagic.Scene({
  triggerElement: ".container-menu",
  triggerHook: .25,
  reverse: false
})
.setClassToggle(".line-vertical", "spawn__line-vertical")
.addIndicators()
.addTo(controller);

var scene3 = new ScrollMagic.Scene({
  triggerElement: ".container-menu",
  triggerHook: .22,
  reverse: false
})
.setClassToggle(".inner-product", "product-spawn")
.addIndicators()
.addTo(controller);
 
/*SCROLL MAGIC NOSOTROS*/
var scene4 = new ScrollMagic.Scene({
  triggerElement: ".card__content",
  triggerHook: 0,
  reverse: false,
  
})
.setClassToggle(".vertical-line", "vertical-line-spawn")
.addIndicators()
.addTo(controller);

var scene5 = new ScrollMagic.Scene({
  triggerElement: ".our-work",
  triggerHook: 0,
  reverse: false,

})
.setClassToggle(".lines", "lines-spawn")
.addIndicators()
.addTo(controller);

var scene6 = new ScrollMagic.Scene({
  triggerElement: ".redes__content",
  triggerHook: 0,
  reverse: false,

})
.setClassToggle(".line-redes", "line-redes-spawn")
.addIndicators()
.addTo(controller);
    


