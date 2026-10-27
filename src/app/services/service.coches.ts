import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment.development";
import { HttpClient } from "@angular/common/http";
@Injectable()

export class ServiceCoches {

    constructor(private _http: HttpClient) {

    }

    getCoches(): Observable<any> {
        return this._http.get(environment.urlApiCoches);
    }

}