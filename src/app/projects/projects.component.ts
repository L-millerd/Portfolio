import { Component, OnInit } from '@angular/core';
// import { CommonService } from '../services/common.service';
import { environment } from 'src/environments/environment';
import projectData  from './projData.json';

gsap.registerPlugin(ScrollTrigger);
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects:any[] = projectData;

  server = environment.server;


  constructor() { }

  ngOnInit(): void {
    //gets from strapi

    // this.cs.getProjects().subscribe( res =>{
    //   this.projects = res.data;
    // })
  }

  ngAfterViewInit(){
    // this.initScrollTriggers();
  }

  initScrollTriggers() {
    document.querySelectorAll(".projectCardWrapper").forEach((card, i) =>{
      const scrollBox = gsap.timeline({
        scrollTrigger:{
          trigger: card,
          toggleActions: "restart none none none",
        }
      });
      scrollBox.from(card, {
        duration: 2,
        opacity: 0,
        x:-200,
        delay: i * 0.2
      })
    })
  }

}
