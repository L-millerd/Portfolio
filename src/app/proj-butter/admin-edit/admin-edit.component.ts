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

  //for messages
  deleted:Boolean = false;
  edited: Boolean = false;
  reverted: Boolean = false;

  showEditMessage: string = "none";
  showDeleteMessage: string = "none";
  showRevertedMessage: string = "none";
  editError: any = '';

  // ogContent: [{}] = [
  //   {
  //     description: "One of Salomon's most versatile boards, the Wonder is designed for maximum performance and playfulness on all terrains, in all conditions. An advanced directional twin shape is built for switch riding, with lengthened contact points for soft snow performance that won't affect handling on groomers.",
  //     id: 1,
  //     image: "../../assets/butter-assets/saloman1.jpg",
  //     image2: "../../assets/butter-assets/saloman2.jpg",
  //     image3: "../../assets/butter-assets/saloman3.jpg",
  //     image4: "../../assets/butter-assets/saloman4.jpg",
  //     image5: "../../assets/butter-assets/saloman3.jpg",
  //     online: 1,
  //     price: "475.00",
  //     stock: 10,
  //     title: "Saloman Wonder Snowboard",
  //   }
  // ]

  constructor(private bs:ButterService, private route:ActivatedRoute) { }

  deleteProduct(){
    if(confirm("Are you sure? Deleting this product will be permanent")){
      let productID = this.route.snapshot.paramMap.get("id");
      this.bs.deleteProduct(productID).subscribe( response =>{
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
      this.price = 475.95,
      this.stock = 10,

      this.reverted = true;
      this.showEditMessage = "none";
      this.showRevertedMessage = "block";


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
      this.price = 629.99,
      this.stock = 5

      this.reverted = true;
      this.showEditMessage = "none";
      this.showRevertedMessage = "block";


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
      this.price = 549.99,
      this.stock = 3

      this.reverted = true;
      this.showEditMessage = "none";
      this.showRevertedMessage = "block";


      this.bs.revertProduct(
        productID,
        this.title,
        this.description,
        this.price,
        this.stock).subscribe( response =>{
          // console.log(response);
        })
    } else {
      return null;
    }
  }
  ////



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

