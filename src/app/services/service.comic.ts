import { Injectable } from '@angular/core';
import { Comic } from '../models/Comic';
@Injectable()

export class ServiceComics {

    getComics(): Promise<Comic[]> {
        let path = "./assets/comics.json";
        let comics: Comic[] = [];
        return fetch(path).then((res) => res.json()).then((data: any[]) => {
            // Recorrer todo el array
            data.forEach((comic) => {
            let comic2: Comic = new Comic(comic.nombre, comic.imagen, comic.descripcion);

            comics.push(comic2);
            
            })
            
            return comics;
        })
        
    }

    async getComicsAsync(): Promise<Comic[]> {
        let path = "./assets/comics.json";
        let comics: Comic[] = [];
        let response = await fetch(path);
        let data = await response.json();

        data.forEach((comic: any) => {
            let comic2: Comic = new Comic(comic.nombre, comic.imagen, comic.descripcion);
            comics.push(comic2);
        })
        
        return comics;
        
    }

}