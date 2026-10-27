import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { ServicePlantilla } from '../../services/service.plantilla';
import { Plantilla } from '../../models/Plantilla';
import { ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-plantilla-funcion-simple',
  standalone: false,
  styleUrl: './plantilla-funcion-simple.css',
  templateUrl: './plantilla-funcion-simple.html',
})

export class PlantillaFuncionSimple implements OnInit {

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

  getPlantillas() {
    let funcion = this.funcion.nativeElement.value;

    this._servicePlantilla.getPlantilla(funcion).subscribe((res: any) => {
      this.plantillas = res;
      this._cdr.detectChanges();
    })

  }

  ngOnInit() {
    this.getFunciones();
  }

}
