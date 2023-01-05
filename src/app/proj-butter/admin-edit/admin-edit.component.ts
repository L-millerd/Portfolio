import { Component, OnInit } from '@angular/core';
import { ButterService } from 'src/app/services/butter.service';
import { ActivatedRoute } from '@angular/router';
import ButterData from 'src/app/proj-butter/butterData.json'

@Component({
  selector: 'app-admin-edit',
  templateUrl: './admin-edit.component.html',
  styleUrls: ['./admin-edit.component.scss']
})
export class AdminEditComponent implements OnInit {
  singleProduct:any;
  products:any[]= ButterData;

  image: string = '';
  image2: string = '';
  image3: string = '';
  image4: string = '';
  image5: string = '';
  title: string = '';
  description: string = '';
  price: number;
  stock: number;

  //for messages
  deleted:Boolean = false;
  edited: Boolean = false;
  reverted: Boolean = false;

  showEditMessage: string = "none";
  showDeleteMessage: string = "none";
  showRevertedMessage: string = "none";
  editError: any = '';


  constructor(private bs:ButterService, private route:ActivatedRoute) { }

  deleteProduct(){
    if(confirm("Are you sure? Deleting this product will be permanent")){
      this.showDeleteMessage = "block";
      this.deleted = true;
    }
  }
  editProduct(){
    this.edited = true;
    this.showEditMessage = "block";
    // let productID = this.route.snapshot.paramMap.get("id");
    // this.bs.editProduct(
    //   productID,
    //   this.image,
    //   this.image2,
    //   this.image3,
    //   this.image4,
    //   this.image5,
    //   this.title,
    //   this.description,
    //   this.price,
    //   this.stock).subscribe( response =>{
    //     console.log(response);
    //     this.edited = response.edited;
    //     this.showEditMessage = "block";
    //     this.editError = response.message;
    //   })
  }


  ngOnInit(): void {
    let routeID:any = this.route.snapshot.paramMap.get("id");
    this.singleProduct = this.products.find(({ id }) => id === +routeID);

    this.title = this.singleProduct.title;
    this.image = this.singleProduct.image;
    this.image2 = this.singleProduct.image2;
    this.image3 = this.singleProduct.image3;
    this.image4 = this.singleProduct.image4;
    this.image5 = this.singleProduct.image5;
    this.description = this.singleProduct.description;
    this.price = this.singleProduct.price;
    this.stock = this.singleProduct.stock;


    // this.bs.getProductID(productID).subscribe( singleProduct => {
    //   this.title = singleProduct.title;
    //   this.image = singleProduct.image;
    //   this.image2 = singleProduct.image2;
    //   this.image3 = singleProduct.image3;
    //   this.image4 = singleProduct.image4;
    //   this.image5 = singleProduct.image5;
    //   this.description = singleProduct.description;
    //   this.price = singleProduct.price;
    //   this.stock = singleProduct.stock;
    // });
  }

}

