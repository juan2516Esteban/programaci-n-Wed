import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
/*IMPORTANTE tenemos que importar el modulo HttpClientModule
para consumir una API*/
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetFakeIpComponent } from './Components/get-fake-ip/get-fake-ip.component';
import { CreateProductComponent } from './Components/CreateProduct/create-product/create-product.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ActualizarProductoComponent } from './Components/actualizar-producto/actualizar-producto.component';

@NgModule({
  declarations: [
    AppComponent,
    GetFakeIpComponent,
    CreateProductComponent,
    ActualizarProductoComponent,
    ActualizarProductoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
