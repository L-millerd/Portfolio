import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { Router } from '@angular/router';

gsap.registerPlugin(ScrollTrigger);
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private vs: ViewportScroller) { }

  tl= gsap.timeline();

  //Arrow & Button Scrolls

  scrollHome(){
    this.vs.scrollToAnchor('home');
  }

  scrollAbout(){
    this.vs.scrollToAnchor('one');
  }

  scrollProjects(){
    this.vs.scrollToAnchor('two');
  }

  scrollContact(){
    this.vs.scrollToAnchor('three');
  }


  ngOnInit(): void {
    gsap.registerPlugin(ScrollTrigger);
    //hero section enter
    gsap.from('.heroContent', {yPercent: -20, opacity: 0, duration: 2, ease: "power2.inOut"});
    // gsap.from('.shape', {yPercent: 20, opacity: 0, duration: 2, ease: "power2.inOut", repeat: -1});

  }



}
