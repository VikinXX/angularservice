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
    this._service.getPersonas().subscribe({
      next: (response) => {
        console.log("Leyendo");
        this.personas = response;
        this._cdr.detectChanges();

      }, error: (error) => {
        console.error("Error al obtener personas:", error);
      }
      
    })
  }

  getPersonasPromise(){
    // Si devolvemos una promesa, la resolvemos con then
    this._service.getPersonasPromise().then((res) => {
      console.log("Leyendo");
      this.personas = res;
      this._cdr.detectChanges();
    })
  }

  async getPersonasAsync(){
    try {
      this.personas = await this._service.getPersonasAsync();
      this._cdr.detectChanges();

    }catch (error) {
      console.error("Error al obtener personas:", error);
    
    }
  }

  ngOnInit(): void {
    this.getPersonasAsync();
  }

}
