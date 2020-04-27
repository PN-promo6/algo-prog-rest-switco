import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  public getAlbums(): void {
    this.httpClient.get('http://localhost:3000/albums')
      .subscribe(
        res => {
          /*Si le serveur retourne un succès, on a dans "res" la donnée envoyée par le serveur*/
          console.log(res);
        },
        error => {
          /*Si le serveur retourne une erreur, on dans "error" le descriptif de l'erreur (code de status, message de status)*/
          console.log(error);
        }
      );
  }

  public getMembers(): void {
    this.httpClient.get('http://localhost:3000/members')
      .subscribe(
        res => {
          /*Si le serveur retourne un succès, on a dans "res" la donnée envoyée par le serveur*/
          console.log(res);
        },
        error => {
          /*Si le serveur retourne une erreur, on dans "error" le descriptif de l'erreur (code de status, message de status)*/
          console.log(error);
        }
      );
  }

  public getTours(): void {
    this.httpClient.get('http://localhost:3000/concertTours')
      .subscribe(
        res => {
          /*Si le serveur retourne un succès, on a dans "res" la donnée envoyée par le serveur*/
          console.log(res);
        },
        error => {
          /*Si le serveur retourne une erreur, on dans "error" le descriptif de l'erreur (code de status, message de status)*/
          console.log(error);
        }
      );
  }

}
