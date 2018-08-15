import {Injectable} from "@angular/core";
import { UsuarioService } from "../services/usuarios";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import {CONFIG} from '../clases/customconfig';

@Injectable()
export class CategoriaService {
  private baseUrl = CONFIG.baseUrlEndPint;

  constructor(
    private usuarioService: UsuarioService,
    private httpClient: HttpClient) {

  }

  getAll() {
    return new Promise(resolve => {
      this.httpClient.get(this.baseUrl + '/categoria/'
      ,{
        headers: new HttpHeaders().set('Authorization', 'JWT ' + this.usuarioService.getCurrentUser().token)
      }
    ).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getById(id:number) {
    return new Promise(resolve => {
      this.httpClient.get(this.baseUrl + '/categoria/' + id
      ,{
        headers: new HttpHeaders().set('Authorization', 'JWT ' + this.usuarioService.getCurrentUser().token)
      }
    ).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
}
