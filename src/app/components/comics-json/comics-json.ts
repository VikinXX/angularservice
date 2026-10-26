import { Component, ChangeDetectorRef } from '@angular/core';
import { Comic } from '../../models/Comic';
import { ServiceComics } from '../../services/service.comic';

@Component({
  selector: 'app-comics-json',
  standalone: false,
  styleUrl: './comics-json.css',
  templateUrl: './comics-json.html',
})
export class ComicsJson {

  public comics: Comic[];
  public serviceComics: any;

  constructor(private _cdr: ChangeDetectorRef) {
    this.comics = [];
    this.serviceComics = new ServiceComics();
  }

  

  cargarComics() {
    // Estamos en public
    this.comics = this.serviceComics.getComics();
    console.log(this.comics);
    

    //let path = "./assets/comics.json";
    //fetch(path).then((res) => res.json()).then((data: any[]) => {
    //  // Recorrer todo el array
    //  data.forEach((comic) => {
    //    let comic2: Comic = new Comic(comic.nombre, comic.imagen, comic.descripcion);
    //    this.comics.push(comic2);
    //    
    //  })
    //  this._cdr.detectChanges();
    //})
    
  }

}
