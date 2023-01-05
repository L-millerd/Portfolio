import { Component, OnInit } from '@angular/core';
import { ButterService } from 'src/app/services/butter.service';
import { Product } from 'src/app/interfaces/butter-interface';
import ButterData from 'src/app/proj-butter/butterData.json'

@Component({
  selector: 'app-b-home',
  templateUrl: './b-home.component.html',
  styleUrls: ['./b-home.component.scss']
})
export class BHomeComponent implements OnInit {

  constructor(private bs: ButterService) { }

  womens:any[]= ButterData;

  lowHigh(){
    this.womens = ButterData;
    this.womens.sort(function(a,b){
      return a.price - b.price;
    })
  }

  highLow(){
    this.womens = ButterData;
    this.womens.sort(function(a,b){
      return b.price - a.price;
    })
  }

  available(){
    this.womens = this.womens.filter(product =>{
      return product.stock >= 1;
    })
  }

  allProducts(){
    // this.bs.getAllProducts().subscribe( womens => {
    //   this.womens = womens;
    // })
    this.womens = ButterData;
  }

  ngOnInit(): void {
    // this.allProducts();
  }
}
