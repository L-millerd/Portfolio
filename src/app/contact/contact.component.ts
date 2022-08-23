import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';



gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  name:string = '';
  email:string='';
  emailSubject:string='';
  message:string='';
  submitted = false;

  constructor(private cs: CommonService) {
   }

  contactSection = '.contactContainer';
  contactWrapper = '.contactWrapper';

  submit(){
    let messageBody={
      data: {
        "name": this.name,
        "email": this.email,
        "emailSubject": this.emailSubject,
        "message": this.message
      }
    }
    this.cs.submitMessage(messageBody).subscribe( res=>{
      console.log(res);
    });
    this.submitted=true;
  }

  initScrollTriggers(){
    gsap.from(this.contactSection, {
      scrollTrigger: {trigger: this.contactWrapper, start: '-150 center'},
      y:500,
      duration: 2,
    });
  }


  ngOnInit(): void {
    this.initScrollTriggers();

  }


}




