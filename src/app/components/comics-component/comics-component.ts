import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ServiceComics } from '../../services/service.comic';

@Component({
  selector: 'app-comics-component',
  standalone: false,
  styleUrl: './comics-component.css',
  templateUrl: './comics-component.html',
})

export class ComicsComponent implements OnInit {

  public comics!: any[];

  constructor(private _cdr: ChangeDetectorRef, private _service: ServiceComics) {

  }

  async ngOnInit() {
    //this._service.getComics().then((comics: any[]) => {
    //  this.comics = comics;
    //  this._cdr.detectChanges();
    //})

    this.comics = await this._service.getComicsAsync();
    this._cdr.detectChanges();
    
  }

}
