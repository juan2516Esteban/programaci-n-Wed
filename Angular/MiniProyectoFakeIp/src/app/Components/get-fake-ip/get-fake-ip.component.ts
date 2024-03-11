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

  public data: any[] = [];

  ngOnInit(): void {
    this.odtenerProductos();

    interval(5000).subscribe(() => {
      this.cambiarVariable();
    });
  }

  data2: any = [];
  public indice: number = 0;
  public imagesControlFirts: number = 0;
  public imagesControlEnd: number = 3;
  public ControlPaginator: boolean = false;

  public odtenerProductos() {
    this.service
      // Estos dos atributos son los que se envian al servicio para paginar los productos
      .odtenerProductos()
      .subscribe((data: any) => {
        this.data = Array.from(data);
        this.data.map((item: any) => {
          let imageStringify = JSON.stringify(item.images); // convertimos el array de imagenes a string
          let imageNoGarbage = imageStringify
            .substring(2, imageStringify.length - 2)
            .replaceAll('\\', ' ')
            .replaceAll('""', '"')
            .replaceAll('" "', '"');
          try {
            item.images = JSON.parse(imageNoGarbage);
            item.imagesActual = item.images[0];
          } catch (e) {}
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

  public PaginatorAvanzar() {
    console.log(this.data.length);
    this.imagesControlFirts = this.imagesControlEnd;
    this.imagesControlEnd += 3;
    console.log(this.data[this.imagesControlFirts - 1]);
    if (this.data[this.imagesControlEnd - 1] == undefined) {
      this.ControlPaginator = true;
    } else {
      this.odtenerProductos();
    }
  }
}
