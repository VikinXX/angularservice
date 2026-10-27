import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ServiceCoches } from '../../services/service.coches';
import { Coche } from '../../models/Coche';

@Component({
  selector: 'app-coches-component',
  standalone: false,
  styleUrl: './coches-component.css',
  templateUrl: './coches-component.html',
})
export class CochesComponent implements OnInit {

  public coches: Coche[];

  constructor(private _service: ServiceCoches, private _cdr: ChangeDetectorRef) {
    this.coches = [];
  }

  getCoches(){
    this._service.getCoches().subscribe({
      next: (response) => {
        console.log("Leyendo coches");
        this.coches = response;
        this._cdr.detectChanges();
      }, error: (error) => {
        console.error("Error al obtener coches:", error);
      }
      
    })
  }

  ngOnInit(): void {
    this.getCoches();
  }

}
