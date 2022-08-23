import { Component, OnInit } from '@angular/core';
// import { gsap } from 'gsap/all';
// import { ScrollTrigger } from 'gsap/all';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  about = '.aboutSection';

  ngOnInit(): void {
    gsap.registerPlugin(ScrollTrigger);
    this.initScrollTriggers();
  }



  initScrollTriggers(){
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(this.about, {
      scrollTrigger: {trigger: this.about},
      x:500,
      duration: 2,
    })
  }
}

//, toggleActions: "restart  none reverse pause"

