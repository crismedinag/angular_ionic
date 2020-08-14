import { Injectable } from '@angular/core';
import { Ciudad } from '../models/ciudad';

@Injectable({
  providedIn: 'root'
})
export class CiudadesServiceService 
{
  public ciudad: Ciudad
  public ciudades: Ciudad[] = []
  
  constructor() { }

  
}
