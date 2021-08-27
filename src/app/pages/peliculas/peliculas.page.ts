import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PeliculaService } from 'src/app/services/pelicula.service';
import { IPeliculas } from 'src/app/model/IPeliculas.interface';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.page.html',
  styleUrls: ['./peliculas.page.scss'],
})
export class PeliculasPage implements OnInit {
   results: Observable<IPeliculas> ;
   term: string='';
   type: string='';

  constructor(private peliServices: PeliculaService) { }

  ngOnInit() {
  }

  searchChanged(): void{
    this.results = this.peliServices.searchMovies(this.term, this.type);
  
  }
}
