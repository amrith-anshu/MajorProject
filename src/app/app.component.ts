import { Component, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { MatSidenav } from '@angular/material/sidenav';
import { SafeUrl } from '@angular/platform-browser';
import { ScanService } from './scan.service';

//import {UserInterface} from 'src/app/user.interface'
//Use RxJs library uses them for the data to get new data again and again.
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  qrCodeDownloadLink: SafeUrl = "";
  result: any = '';
  scanCount: any ='0';
  httpClient: any;

  constructor(private http: HttpClient, private scanService: ScanService) {
    this.qrData
   }
   //users: UserInterface[] = []
  
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
      reader.onload = (_e) => {
        this.imagePreview = reader.result;
      };
      reader.readAsDataURL(file);
    }
 }

onColorChange(value: string) {
  this.selectedColor = value;
}

onChangeURL(url: SafeUrl) {
  this.qrCodeDownloadLink = url;
}

onCodeResult(result:string)
{
    this.result = result ;
}

onCodeResultx(_scanCount:string)
  {
    this.scanCount++ ;
   }
  

}
