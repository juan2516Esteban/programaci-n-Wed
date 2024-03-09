import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FakeIpService {
  // importante importantamos el modulo HttpClient
  constructor(private http: HttpClient) {}

  /*llamamos la ip desde el archivo environment.ts con la
  URL correspondiente*/
  public urlIpFake: any = environment.UrlFakeIpProducts;

  /*creamos un metodo para obtener los productos por medio de JSON*/
  public odtenerProductos() {
    return this.http.get(`${this.urlIpFake}?offset=30&limit=20`);
  }

  public CreateProduct(body: any) {
    return this.http.post(this.urlIpFake, body);
  }
}
