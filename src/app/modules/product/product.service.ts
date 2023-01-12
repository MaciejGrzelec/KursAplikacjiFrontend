import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>("/api/products");
    // return [
    //   {
    //     name: "Produkt 1",
    //     category: "Kategoria 1",
    //     desription: "Opis produktu 1",
    //     price: 11.99,
    //     currency: "PLN"
    //   },
    //   {
    //     name: "Produkt 2",
    //     category: "Kategoria 2",
    //     desription: "Opis produktu 2",
    //     price: 11.99,
    //     currency: "PLN"
    //   },
    //   {
    //     name: "Produkt 3",
    //     category: "Kategoria 3",
    //     desription: "Opis produktu 3",
    //     price: 11.99,
    //     currency: "PLN"
    //   }
  
    // ];
  }
}
