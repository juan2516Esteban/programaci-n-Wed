import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class OdtenerFakeIpService {
  constructor(private http: HttpClient) {}

  private UrlFakeIp = environment.apiUrl;

  public odtenerFakeIp() {
    return this.http.get(this.UrlFakeIp);
  }
}
