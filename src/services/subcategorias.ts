import {Injectable} from "@angular/core";
import { UsuarioService } from "../services/usuarios";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import {CONFIG} from '../clases/customconfig';

@Injectable()
export class SubcategoriaService {
  private baseUrl = CONFIG.baseUrlEndPint;

  constructor(
    private usuarioService: UsuarioService,
    private httpClient: HttpClient) {

  }

  getById(id: number) {
    return new Promise(resolve => {
      this.httpClient.get(this.baseUrl + '/subcategoria/' + id
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

  getByIdCategory(idCategoria: number) {
    return new Promise(resolve => {
      this.httpClient.get(this.baseUrl + '/subcategoria/categoria/' + idCategoria + '/'
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
