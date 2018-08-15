import { Injectable} from "@angular/core";
import { Usuario } from "../clases/usuario";
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/mergeMap';
import {CONFIG} from '../clases/customconfig';

@Injectable()
export class UsuarioService {
  public currentUser: Usuario;
  private baseUrl = CONFIG.baseUrlEndPint;
  public token: string;

  constructor(public httpClient: HttpClient) {
     console.log('Hello RestServiceProvider Provider');
  }

  register(usuario: Usuario){
    let data = {
      'first_name': usuario.nombre,
      'last_name': usuario.apellido,
      'email': usuario.email,
      'password': usuario.password,
      'username': usuario.email
    };

    return new Promise((resolve, reject) => {
        this.httpClient.post(this.baseUrl + '/usuario/', data
      ).subscribe(data => {
          //resolve(data);
          if(data['id'] != null){
            resolve(new Usuario(data));
          }
        }, err => {
          reject(err);
          //console.log(err);
        });
      });
  }

  getByLogin(username: string, password: string){
    let data = {
      'username': username,
      'password': password
    };

    return new Promise((resolve, reject) => {
        this.httpClient.post(this.baseUrl + '/auth/', data
      ).subscribe(data => {
          //resolve(data);
          if(data['token'] != null){
            this.token = data['token'];
            this.currentUser = new Usuario(data['user']);
            this.currentUser.token = data['token'];
            localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
            resolve(this.currentUser);
          }
        }, err => {
          reject(err);
        });
      });
  }

  getCurrentUser(){
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    return this.currentUser;
  }

  logout(){
    this.currentUser = null;
    localStorage.removeItem('currentUser');
    localStorage.removeItem('token');
  }

  anonimo(){
    //this.currentUser = this.getById(0);
    //this.storage.set('usuario', JSON.stringify(this.currentUser));
  }
}
