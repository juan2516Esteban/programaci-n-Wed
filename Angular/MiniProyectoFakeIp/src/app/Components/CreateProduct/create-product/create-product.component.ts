import { Component } from '@angular/core';
import { FakeIpService } from 'src/app/Service/fake-ip.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css'],
})
export class CreateProductComponent {
  constructor(private service: FakeIpService) {}

  ngOnInit(): void {}

  public CreateProduct() {
    let body = {
      title: this.formProduct.get('title')?.value,
      price: this.formProduct.get('price')?.value,
      description: this.formProduct.get('description')?.value,
      categoryId: this.formProduct.get('categoryId')?.value,
      images: [this.formProduct.get('images')?.value],
    };

    this.service.CreateProduct(body).subscribe((data: any) => {
      console.log(data);
    });
  }

  public formProduct = new FormGroup({
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
