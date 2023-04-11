import { Component, ViewChild } from '@angular/core';
import {HttpClient} from '@angular/common/http';
//import { SafeUrl } from '@angular/platform-browser';
import { MatSidenav } from '@angular/material/sidenav';
import { DomSanitizer } from '@angular/platform-browser';
import { QRCodeModule } from 'angularx-qrcode';
import { QRCode } from 'qrcode';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private http: HttpClient, private sanitizer: DomSanitizer) { }


 selectedColor: string = '#007bff';
  title = 'image';
  imageData: any;
  file: any;
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  arrayColors: any = {
    color1: '#2883e9',
    color2: '#e920e9',
    color3: 'rgb(255,245,0)',
    color4: 'rgb(236,64,64)',
    color5: 'rgba(45,208,45,1)'
  };
  imagePreview: any =
    'https://angular.io/assets/images/logos/angular/angular.png';
  qrData = 'https://trst01.com/';
  // imageUrl = 'https://angular.io/assets/images/logos/angular/angular.png';
  chooseFile(event: any) {
    this.file = event.target.files[0];
    console.log(this.file);
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        this.imagePreview = reader.result;
      };
      reader.readAsDataURL(file);
    }
 }

onColorChange(value: string) {
  this.selectedColor = value;
}

downloadImage() {
  this.http.get('qrcode', { responseType: 'blob' })
    .subscribe((blob: Blob) => {
      const objectUrl = URL.createObjectURL(blob);
      this.imageData = this.sanitizer.bypassSecurityTrustUrl(objectUrl);
      const downloadLink = document.createElement('a');
      downloadLink.href = objectUrl;
      downloadLink.download = 'myimage.png';
      downloadLink.click();
      window.URL.revokeObjectURL(objectUrl);
      downloadLink.remove();
    });
}

}
