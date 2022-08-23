import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/butter-interface';
import { ButterService } from 'src/app/services/butter.service';

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.scss']
})

export class AdminViewComponent implements OnInit {
  online:number;
  flexSwitchCheckDefault:boolean = true;
  checked = "flexSwitchCheckChecked";

  products:Product[] =[];

  constructor(private bs:ButterService) { }

  toggleLive(productID:number){

    this.bs.toggleLive(productID).subscribe( response =>{
      console.log(response);
    })
  }

  ngOnInit(): void {
    this.bs.displayProducts().subscribe( products =>{
      this.products = products;

     console.log(products);
    })
  }

}

