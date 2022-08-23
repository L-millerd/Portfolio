import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Projects } from '../interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }

  private url = environment.server

  submitMessage(data:any){
    return this.http.post(this.url + '/api/leads', data)
  }

  getProjects(){
    return this.http.get<Projects>(this.url + '/api/projects/?populate=deep,2');
  }

}
