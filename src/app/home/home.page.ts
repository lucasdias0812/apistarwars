import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Observable, catchError} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {
  films: Observable<any> | undefined; //Para arrumar o erro da definição do films, devido a atualização do Ionic que obriga a ter um valor de início
  constructor(private router: Router, private http: HttpClient, public toastController: ToastController) {}

  ngOnInit(){

    this.films = this.http.get('https://swapi.dev/api/films').pipe(
      catchError(erro => this.exibirErro(erro))
    );
  }

  async exibirErro(erro:any){

    const toast = await this.toastController.create({
      message: 'Erro ao consultar API: ' + erro.status + ':' + erro.message,
      duration: 4000,
      color: 'danger',
      position: 'middle'
    });
    console.log(erro);
    toast.present();
    return null;
  }
  openDetails(film:any){
    let split = film.url.split('/');
    let filmId = split[split.length-2];
    this.router.navigateByUrl('/filme-detalhe/${filmId}');
  }
}
