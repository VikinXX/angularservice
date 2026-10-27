import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { firstValueFrom, Observable } from "rxjs";
import { Persona } from "../models/Persona";
import { environment } from "../../environments/environment.development";
@Injectable()


export class ServicePersona {

    constructor(private _http: HttpClient) {

    }

    // Hay 2 opciones: devolver la promesa o devolver la petición.

    // Devolvemos la petición, utilizando observable
    getPersonas(): Observable<any> {
        let path = "https://servicioapipersonasmvcpgs.azurewebsites.net/api/personas";
        return this._http.get(environment.urlApiPersonas);
    }

    getPersonasPromise(): Promise<any> {
        let path = "https://servicioapipersonasmvcpgs.azurewebsites.net/api/personas";

        let promise = new Promise((resolve) => {
            this._http.get(environment.urlApiPersonas).subscribe((res) => {
                resolve(res);
            })
        })

        return promise;
    }

    async getPersonasAsync(): Promise<Persona[]> {
        let path = "https://servicioapipersonasmvcpgs.azurewebsites.net/api/personas";
        return firstValueFrom(this._http.get<Persona[]>(environment.urlApiPersonas));
        
    }
}