import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { ServicePlantilla } from '../../services/service.plantilla';
import { Plantilla } from '../../models/Plantilla';
import { ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-plantilla-funcion-multiple',
  standalone: false,
  styleUrl: './plantilla-funcion-multiple.css',
  templateUrl: './plantilla-funcion-multiple.html',
})

export class PlantillaFuncionMultiple implements OnInit {

  public funciones: any[];
  public plantillas: Plantilla[];
  @ViewChild("funcion") funcion!: ElementRef;

  constructor(private _servicePlantilla: ServicePlantilla, private _cdr: ChangeDetectorRef) {
    this.funciones = [];
    this.plantillas = [];
  }

  getFunciones() {
    this._servicePlantilla.getFunciones().subscribe((res: any) => {
      this.funciones = res;
      this._cdr.detectChanges();
    })
  }

  getPlantillasMultiple(){
    let aux = [];
    for(let fun of this.funcion.nativeElement.options){
      if(fun.selected){
        aux.push(fun.value);
      }
    }
    this._servicePlantilla.getPlantillasMultiple(aux).subscribe((res: any) => {
      this.plantillas = res;
      this._cdr.detectChanges();
    })
  }

  ngOnInit() {
    this.getFunciones();
  }

}