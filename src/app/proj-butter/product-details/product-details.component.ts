import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/interfaces/butter-interface';
import { ButterService } from 'src/app/services/butter.service';
import ButterData from 'src/app/proj-butter/butterData.json'


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  singleProduct:any;

  womens:any[]= ButterData;

  constructor(private route: ActivatedRoute, private bs:ButterService) { }

  findProduct(product:any){
      return product.id === 2
  }

  ngOnInit(): void {
    let routeID:any = this.route.snapshot.paramMap.get("id");

    this.singleProduct = this.womens.find(({ id }) => id === +routeID);

    // console.log(this.singleProduct);
  }

}
