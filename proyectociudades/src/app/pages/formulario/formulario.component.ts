import { Component, OnInit } from '@angular/core';
import { CiudadesServiceService } from '../../shared/ciudades-service.service';
import { Ciudad } from '../../models/ciudad';
import { Location } from '@angular/common';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  public ciudad

  constructor(public ciudadService: CiudadesServiceService, public _location: Location) { }


  add(nombre:string, pais:string, codigo:string)
  {
    this.ciudadService.ciudad = new Ciudad(nombre, pais, codigo);
    this.ciudadService.ciudades.push(this.ciudadService.ciudad);
  }

  
  edit(codigoE, nombre)
  {
    for(let i=0; i<this.ciudadService.ciudades.length; i++)
    {
      if(this.ciudadService.ciudades[i].codigo === codigoE)
      {
        this.ciudadService.ciudades[i].nombre = nombre;
      }
    }
  }

  delete(codigoB)
  {
    for(let i=0; i<this.ciudadService.ciudades.length; i++)
    {
      if(this.ciudadService.ciudades[i].codigo === codigoB)
      {
        this.ciudadService.ciudades[i] = null;
      }
    }
  }

  ngOnInit(): void {
  }

}
