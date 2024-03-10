import { Component } from '@angular/core';
import { FakeIpService } from 'src/app/Service/fake-ip.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-actualizar-producto',
  templateUrl: './actualizar-producto.component.html',
  styleUrls: ['./actualizar-producto.component.css'],
})
export class ActualizarProductoComponent {
  constructor(private service: FakeIpService) {}

  ngOnInit(): void {}

  public UpdateProduct(id: any) {
    let body = {
      title: this.UpdateProductForms.get('title')?.value,
      price: this.UpdateProductForms.get('price')?.value,
      description: this.UpdateProductForms.get('description')?.value,
      categoryId: this.UpdateProductForms.get('categoryId')?.value,
      images: [this.UpdateProductForms.get('images')?.value],
    };

    this.service.UpdateProduct(body, id).subscribe((data: any) => {
      console.log(data);
    });
  }

  public UpdateProductForms = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(3)]),
    price: new FormControl('', [
      Validators.required,
      Validators.pattern(/^\d+$/),
      Validators.minLength(1),
    ]),
    description: new FormControl('', [
      Validators.required,
      Validators.maxLength(50),
      Validators.minLength(5),
    ]),
    categoryId: new FormControl('', [
      Validators.required,
      Validators.minLength(1),
    ]),
    images: new FormControl('', [Validators.required, Validators.minLength(1)]),
  });
}
