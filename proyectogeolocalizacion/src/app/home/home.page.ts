import { Component } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  public latitudP;
  public longitudP;
  public latitudO;
  public longitudO;

  constructor(private geolocation: Geolocation) 
  {
    this.latitudP = 0;
    this.longitudP = 0;
    this.latitudO = 0;
    this.longitudO = 0;
  }

  obtenerPromesa():void
  {
    this.geolocation.getCurrentPosition().then((resp) =>
    {
      this.latitudP = resp.coords.latitude;
      this.longitudP = resp.coords.longitude;
    }).catch((error) =>
    {
      console.log("Error al obtener la localización", error);
    }
    );
  }

  obtenerObservable():void
  {
    let watch = this.geolocation.watchPosition();
    watch.subscribe((data) =>
    {
      this.latitudO = data.coords.latitude;
      this.longitudO = data.coords.longitude;
    }
    );
  }

}
