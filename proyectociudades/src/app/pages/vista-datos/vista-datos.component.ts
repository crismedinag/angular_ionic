import { Component, OnInit } from '@angular/core';
import { CiudadesServiceService } from '../../shared/ciudades-service.service';
import { Ciudad } from '../../models/ciudad';
import { Location } from '@angular/common';

@Component({
  selector: 'app-vista-datos',
  templateUrl: './vista-datos.component.html',
  styleUrls: ['./vista-datos.component.css']
})
export class VistaDatosComponent implements OnInit {

  public vista_ciudades: Ciudad[]
  public vista_ciudad: Ciudad

  constructor(public ciudadService: CiudadesServiceService, public _location: Location) 
  {
      this.ciudadService.ciudad;
      this.ciudadService.ciudades; 
  }

  getAll()
  {
    this.vista_ciudades = this.ciudadService.ciudades;
  }

  getOne(codigoM:string)
  {
    for(let i=0; i<this.ciudadService.ciudades.length; i++)
    {
      if(this.ciudadService.ciudades[i].codigo === codigoM)
      {
        this.vista_ciudad = this.ciudadService.ciudades[i];
      }
    }
  }

  ngOnInit(): void {
  }

}
