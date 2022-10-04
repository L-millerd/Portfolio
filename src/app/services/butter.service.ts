import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfaces/butter-interface';
import { Login } from '../interfaces/butter-interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ButterService {

  constructor(private http: HttpClient) { }

  server = "https://starfish-app-m7u82.ondigitalocean.app";

  private url = this.server + "/womens";
  private loginURL = "https://starfish-app-m7u82.ondigitalocean.app/login";
  private viewURL = "https://starfish-app-m7u82.ondigitalocean.app/admin-view";
  private addURL = "https://starfish-app-m7u82.ondigitalocean.app/admin-add";
  private editURL = "https://starfish-app-m7u82.ondigitalocean.app/admin-edit";
  private deleteURL = "https://starfish-app-m7u82.ondigitalocean.app/admin-delete";
  private updateURL = "https://starfish-app-m7u82.ondigitalocean.app/admin-update";
  private toggleURL = "https://starfish-app-m7u82.ondigitalocean.app/admin-toggle";
  private revertURL = "http://localhost:4400/admin-revert";

  getAllProducts(){
    return this.http.get<any>(this.url);

  }

  getProductById(id:number){
    return this.http.get<Product>(this.url + '/' + id);
  }

  //admin services

  loginService(email:string, password:string){
    let loginBody = {
      email: email,
      password: password
    }
    return this.http.post<Login>(this.loginURL, loginBody);
  }

  displayProducts(){
    return this.http.get<Product[]>(this.viewURL);
  }

  addProduct(image: string, image2: string, image3: string, image4: string, image5: string, title: string, description: string, price: number, stock: number){
    let addBody = {
      image: image,
      image2: image2,
      image3: image3,
      image4: image4,
      image5: image5,
      title: title,
      description: description,
      price: price,
      stock: stock
    }

    return this.http.post<{ addProduct:boolean, message:any }>(this.addURL, addBody)
  }

  getProductID(id:any){
    return this.http.get<Product>(this.editURL + "/" + id)
  }

  deleteProduct(id:any){
    return this.http.delete<{deleted:boolean, message:string}>(this.deleteURL + "/" + id)
  }

  editProduct(id:any, image: string, image2: string, image3: string, image4: string, image5: string, title: string, description: string, price: number, stock: number){
    let editBody = {
      image: image,
      image2: image2,
      image3: image3,
      image4: image4,
      image5: image5,
      title: title,
      description: description,
      price: price,
      stock: stock
    }
    return this.http.put<{ edited:Boolean, message:any}>(this.updateURL + "/" + id, editBody)
  }

  ///revert
  revertProduct(id:any, title: string, description: string, price: number, stock: number){
    let revertBody = {
      title: title,
      description: description,
      price: price,
      stock: stock
    }
    return this.http.put<{ reverted:Boolean, message:any}>(this.revertURL + "/" + id, revertBody)
  }
  ////

  toggleLive(id:any){
    let toggleBody = {

    }
    return this.http.put<any>(this.toggleURL + "/" + id, toggleBody);
  }
}


