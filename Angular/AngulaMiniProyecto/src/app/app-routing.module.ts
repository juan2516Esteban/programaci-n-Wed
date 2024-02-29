import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FakeIpComponentComponent } from './Fake_Ip/fake_ip/fake-ip-component.component';

const routes: Routes = [
  {
    path: 'hijo',
    component: FakeIpComponentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
