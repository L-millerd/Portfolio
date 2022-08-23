import { Component, OnInit, ViewChildren } from '@angular/core';
import { CommonService } from '../services/common.service';
import { environment } from 'src/environments/environment';

gsap.registerPlugin(ScrollTrigger);
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects:any[] = [];
  projects2:any[] = [];
  server = environment.server;

  constructor(private cs: CommonService) { }

  ngOnInit(): void {
    this.cs.getProjects().subscribe( res =>{
      this.projects = res.data;
      // console.log(this.projects)
    })

  }

  ngAfterViewInit(){
    // this.initScrollTriggers();
  }

  initScrollTriggers() {
    document.querySelectorAll(".projectCardWrapper").forEach((card, i) =>{
      const scrollBox = gsap.timeline({
        scrollTrigger:{
          trigger: card,
          // start: "top center",
          toggleActions: "restart none none none",
        }
      });
      scrollBox.from(card, {
        duration: 2,
        opacity: 0,
        x:-200,
        // stagger: 0.5,
        delay: i * 0.2
      })
    })
  }

}
