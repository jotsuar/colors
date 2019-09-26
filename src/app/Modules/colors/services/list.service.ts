import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(private http: HttpClient) { }

  getColors(page:number = 1){
    const URL =  `https://reqres.in/api/colors?page=${page}`;
    return this.http.get(URL);
  }

}
