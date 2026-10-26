import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable()


export class ServicePersona {

    constructor(private _http: HttpClient) {

    }

    // Hay 2 opciones: devolver la promesa o devolver la petición.

    // Devolvemos la petición, utilizando observable
    getPersonas(): Observable<any> {
        let path = "https://servicioapipersonasmvcpgs.azurewebsites.net/api/personas";
        return this._http.get(path);
    }

}