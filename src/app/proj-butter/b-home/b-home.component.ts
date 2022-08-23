import { Component, OnInit } from '@angular/core';
import { ButterService } from 'src/app/services/butter.service';
import { Product } from 'src/app/interfaces/butter-interface';

@Component({
  selector: 'app-b-home',
  templateUrl: './b-home.component.html',
  styleUrls: ['./b-home.component.scss']
})
export class BHomeComponent implements OnInit {

  constructor(private bs: ButterService) { }

  womens:Product[]= [];

  ngOnInit(): void {
    this.bs.getAllProducts().subscribe( womens => {
      console.log(womens);
      this.womens = womens;
    })
  }
}
