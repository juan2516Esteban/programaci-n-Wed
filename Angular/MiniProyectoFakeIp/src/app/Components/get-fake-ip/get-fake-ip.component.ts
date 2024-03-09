import { Component } from '@angular/core';
// Importamos el servicio
import { FakeIpService } from 'src/app/Service/fake-ip.service';
import { interval } from 'rxjs';

@Component({
  selector: 'app-get-fake-ip',
  templateUrl: './get-fake-ip.component.html',
  styleUrls: ['./get-fake-ip.component.css'],
})
export class GetFakeIpComponent {
  /*instaciamos una variable en el constructor para llamar a nuestro servicio 
  FakeIpService*/
  constructor(private service: FakeIpService) {}

  ngOnInit(): void {
    this.odtenerProductos();

    interval(5000).subscribe(() => {
      this.cambiarVariable();
    });
  }

  public data: any[] = [];
  public indice: number = 0;

  public odtenerProductos() {
    this.service.odtenerProductos().subscribe((data: any) => {
      this.data = Array.from(data);
      console.log(this.data);
      this.data.map((item: any) => {
        let imageStringify = JSON.stringify(item.images); // convertimos el array de imagenes a string
        let imageNoGarbage = imageStringify
          .substring(2, imageStringify.length - 2)
          .replaceAll('\\', ' ')
          .replaceAll('""', '"')
          .replaceAll('" "', '"');
        console.log(imageNoGarbage);
        try {
          item.images = JSON.parse(imageNoGarbage);
          item.imagesActual = item.images[0];
        } catch (e) {
          console.log(e);
        }
      });
    });
  }

  cambiarVariable() {
    this.indice++;

    this.data.map((item: any) => {
      let longitud: number = item.images.length;
      item.imagesActual = item.images[this.indice % longitud];
    });
  }
}
