import {Injectable} from "@angular/core";
import {Reclamo} from "../clases/reclamo";
import { UsuarioService } from "../services/usuarios";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import {CONFIG} from '../clases/customconfig';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ReclamoService {
  private reclamos: Reclamo[];
  private baseUrl = CONFIG.baseUrlEndPint;

  constructor(
    private usuarioService: UsuarioService,
    private httpClient: HttpClient
  ) {
    this.reclamos = [];
  }

  /*getAll() {
    return new Promise(resolve => {
      this.httpClient.get(this.baseUrl + '/reclamo/'
      ,{
        headers: new HttpHeaders().set('Authorization', 'JWT ' + this.usuarioService.getCurrentUser().token)
      }
    ).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }*/

  getAll(): Observable<any> {
    return this.httpClient.get(this.baseUrl + '/reclamo/'
    ,{headers: new HttpHeaders().set('Authorization', 'JWT ' + this.usuarioService.getCurrentUser().token)}
    );
  }

  getById(id:number) {
    return new Promise(resolve => {
      this.httpClient.get(this.baseUrl + '/reclamo/' + id
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

  save(reclamo: Reclamo){
    if(reclamo.id == null){
      return this.nuevo(reclamo);
    }else{
      return this.actualizar(reclamo);
    };
  }

  nuevo(reclamo: Reclamo){
    return new Promise(resolve => {
      this.httpClient.post(this.baseUrl + '/reclamo/', reclamo
      ,{
        headers: new HttpHeaders().set('Authorization', 'JWT ' + this.usuarioService.getCurrentUser().token)
      }
    ).subscribe(data => {
        console.log('nuevo');
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  actualizar(reclamo: Reclamo){
    return new Promise(resolve => {
      this.httpClient.put(this.baseUrl + '/reclamo/' + reclamo.id, reclamo
      ,{
        headers: new HttpHeaders().set('Authorization', 'JWT ' + this.usuarioService.getCurrentUser().token)
      }
    ).subscribe(data => {
        console.log('actualizar');
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  remove(id:number){
    return new Promise(resolve => {
      this.httpClient.delete(this.baseUrl + '/reclamo/' + id + '/'
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
