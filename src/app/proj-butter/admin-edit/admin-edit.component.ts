import { Component, OnInit } from '@angular/core';
import { ButterService } from 'src/app/services/butter.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/interfaces/butter-interface';

@Component({
  selector: 'app-admin-edit',
  templateUrl: './admin-edit.component.html',
  styleUrls: ['./admin-edit.component.scss']
})
export class AdminEditComponent implements OnInit {
  image: string = '';
  image2: string = '';
  image3: string = '';
  image4: string = '';
  image5: string = '';
  title: string = '';
  description: string = '';
  price: number;
  stock: number;

  deleted:Boolean = false;
  edited: Boolean = false;
  online: Boolean = false;

  showEditMessage: string = "none";
  showDeleteMessage: string = "none";
  editError: any = '';

  // revertProduct
  title1: string = 'Salomon Wonder Snowboard';
  description1: string ="One of Salomon's most versatile boards, the Wonder is designed for maximum performance and playfulness on all terrains, in all conditions. An advanced directional twin shape is built for switch riding, with lengthened contact points for soft snow performance that won't affect handling on groomers.";
  price1: number = 475;
  stock1: number = 10;

  title2: string = 'Burton Feelgood Camber Snowboard';
  description2: string ="Backed by Kelly Clark, the women’s Burton Feelgood Snowboard has been the defining force in women’s snowboarding for two decades. The Feelgood boasts a unique shape, matched with positively powerful pop for Ferrari-like handing.";
  price2: number = 630;
  stock2: number = 5;

  title3: string = 'Salomon Lotus Snowboard';
  description3: string ='Like a friend who waits for you to get up and clean off your goggles on a powder day, the Salomon Lotus Snowboard has that rare combination of trusty performance and easygoing likeability you need to take your riding to the next level. ';
  price3: number = 550;
  stock3: number = 3;
////////////

  constructor(private bs:ButterService, private route:ActivatedRoute) { }

  deleteProduct(){
    if(confirm("Are you sure? Deleting this product will be permanent")){
      let productID = this.route.snapshot.paramMap.get("id");
      this.bs.deleteProduct(productID).subscribe( response =>{
      // console.log(response);
      this.showDeleteMessage = "block";
      this.deleted = response.deleted;
      })

    }
  }

  editProduct(){
    let productID = this.route.snapshot.paramMap.get("id");
    this.bs.editProduct(
      productID,
      this.image,
      this.image2,
      this.image3,
      this.image4,
      this.image5,
      this.title,
      this.description,
      this.price,
      this.stock).subscribe( response =>{
        console.log(response);
        this.edited = response.edited;
        this.showEditMessage = "block";
        this.editError = response.message;
      })
  }

  ///revert
  revertProduct(){
    let productID = this.route.snapshot.paramMap.get("id");

    if (productID === "1"){
      this.title = 'Saloman Wonder Snowboard',
      this.description = "One of Salomon's most versatile boards, the Wonder is designed for maximum performance and playfulness on all terrains, in all conditions. An advanced directional twin shape is built for switch riding, with lengthened contact points for soft snow performance that won't affect handling on groomers.",
      this.price = 475,
      this.stock = 10

      this.bs.revertProduct(
        productID,
        this.title,
        this.description,
        this.price,
        this.stock).subscribe( response =>{
          console.log(response);
        })
    } else if (productID === "2"){
      this.title = 'Burton Feelgood Camber Snowboard',
      this.description = "Backed by Kelly Clark, the women’s Burton Feelgood Snowboard has been the defining force in women’s snowboarding for two decades. The Feelgood boasts a unique shape, matched with positively powerful pop for Ferrari-like handing.",
      this.price = 630,
      this.stock = 5

      this.bs.revertProduct(
        productID,
        this.title,
        this.description,
        this.price,
        this.stock).subscribe( response =>{
          console.log(response);
        })
    } else if (productID === "3"){
      this.title = 'Salomon Lotus Snowboard',
      this.description = 'Like a friend who waits for you to get up and clean off your goggles on a powder day, the Salomon Lotus Snowboard has that rare combination of trusty performance and easygoing likeability you need to take your riding to the next level. ',
      this.price = 550,
      this.stock = 3

      this.bs.revertProduct(
        productID,
        this.title,
        this.description,
        this.price,
        this.stock).subscribe( response =>{
          console.log(response);
        })
    } else {
      return 'No original content';
    }
  }
  //////


  ngOnInit(): void {
    let productID:any = this.route.snapshot.paramMap.get("id");
    this.bs.getProductID(productID).subscribe( singleProduct => {
      this.title = singleProduct.title;
      this.image = singleProduct.image;
      this.image2 = singleProduct.image2;
      this.image3 = singleProduct.image3;
      this.image4 = singleProduct.image4;
      this.image5 = singleProduct.image5;
      this.description = singleProduct.description;
      this.price = singleProduct.price;
      this.stock = singleProduct.stock;
    });

  }

}

