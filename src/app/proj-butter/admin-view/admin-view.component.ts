import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/butter-interface';
import { ButterService } from 'src/app/services/butter.service';
import ButterData from 'src/app/proj-butter/butterData.json'

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.scss']
})

export class AdminViewComponent implements OnInit {
  online:number;
  flexSwitchCheckDefault:boolean = true;
  checked = "flexSwitchCheckChecked";


  products:any[]= ButterData;


  constructor(private bs:ButterService) { }

  // toggleLive(productID:number){
  //   this.bs.toggleLive(productID).subscribe( response =>{
  //   })
  // }

  toggleOn(productID:number){
    let objIndex = this.products.findIndex((product => product.id == productID));
    this.products[objIndex].online = 0;
    console.log(this.products[objIndex].online);
  }

  toggleOff(productID:number){
    let objIndex = this.products.findIndex((product => product.id == productID));
    this.products[objIndex].online = 1;
    console.log(this.products[objIndex].online);
  }

  ngOnInit(): void {
    // this.bs.displayProducts().subscribe( products =>{
    //   this.products = products;
    // //  console.log(products);
    // })
  }
}

