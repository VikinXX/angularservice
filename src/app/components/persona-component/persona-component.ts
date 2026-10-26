import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Persona } from '../../models/Persona';
import { ServicePersona } from '../../services/service.persona';

@Component({
  selector: 'app-persona-component',
  standalone: false,
  styleUrl: './persona-component.css',
  templateUrl: './persona-component.html',
})
export class PersonaComponent implements OnInit {

  public personas!: Persona[];

  constructor(private _service: ServicePersona, private _cdr: ChangeDetectorRef) {}

  getPersonas(){
    // Si devolvemos un observable con la petición, nos suscribimos a la su promesa
    this._service.getPersonas().subscribe((res) => {
      console.log("Leyendo");
      this.personas = res;
      this._cdr.detectChanges();
    })
  }

  ngOnInit(): void {
    this.getPersonas();
  }

}
