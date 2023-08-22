import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  films: Observable<any> | undefined

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit() {
    this.films = this.http.get('https://swapi.dev/api/films')

  }

  openDetails(film) {
    let split = film.url.split('/');
    let filmId = split[split.lenght-2];
    this.router.navigateByUrl(`/filme-detalhe/${filmId}`)
  }
}
