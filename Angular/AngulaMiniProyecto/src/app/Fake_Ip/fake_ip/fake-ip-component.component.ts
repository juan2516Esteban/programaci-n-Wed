import { Component, OnInit } from '@angular/core';
import { OdtenerFakeIpService } from 'src/app/Sevices/Fake_Ip/odtener-fake-ip.service';
@Component({
  selector: 'app-fake-ip-component',
  templateUrl: './fake-ip-component.component.html',
  styleUrls: ['./fake-ip-component.component.css'],
})
export class FakeIpComponentComponent implements OnInit {
  constructor(private service: OdtenerFakeIpService) {}

  ngOnInit(): void {
    this.service.odtenerFakeIp().subscribe((data: any) => {
      console.log(data.description);
    });
  }
}
