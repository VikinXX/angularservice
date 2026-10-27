import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
@Injectable()

export class ServicePlantilla{

    constructor(private _http: HttpClient) {

    }

    getFunciones(): Observable<any> {
        return this._http.get(environment.urlApiPlantillas + 'api/Plantilla/Funciones');
    }

    getPlantilla(funcion: string): Observable<any> {
        return this._http.get(environment.urlApiPlantillas + 'api/Plantilla/PlantillaFuncion/' + funcion);
    }

    getPlantillasMultiple(funciones: string[]): Observable<any> {
        let path = environment.urlApiPlantillas + 'api/Plantilla/PlantillaFunciones?funcion=';
        for(let i = 0 ; i < funciones.length ; i++ ){
            if(i === 0){
                path += funciones[i];
            }else{
                path += '&funcion=' + funciones[i];
            }
        }
        return this._http.get(path);
    }

}