import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/interfaces/butter-interface';
import { ButterService } from 'src/app/services/butter.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  singleProduct:Product;

  womens:Product[]=[];

  constructor(private route: ActivatedRoute, private bs:ButterService) { }


  ngOnInit(): void {
    let id:any = this.route.snapshot.paramMap.get("id");

    this.bs.getProductById(id).subscribe( singleProduct =>  {
      this.singleProduct = singleProduct;
     console.log(this.singleProduct.image)
    });


  }

}
