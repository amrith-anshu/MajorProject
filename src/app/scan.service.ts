import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ScanService {
  private apiUrl = 'http://localhost:3000/qrcode';

  constructor(private http: HttpClient) { }

  getScanCount() {
    return this.http.get(`${this.apiUrl}/1`);
  }

  updateScanCount(count: number) {
    const scan = { id: 1, count };
    return this.http.put(`${this.apiUrl}/1`, scan);
  }

}
