import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FakeIpComponentComponent } from './Fake_Ip/fake_ip/fake-ip-component.component';

@NgModule({
  declarations: [AppComponent, FakeIpComponentComponent],
  imports: [BrowserModule, AppRoutingModule, FakeIpComponentComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
