import {Component} from "@angular/core";
import {NavController, PopoverController} from "ionic-angular";
import {Storage} from '@ionic/storage';

import {NotificationsPage} from "../notifications/notifications";
import {CategoriasPage} from "../categorias/categorias";

import {SearchLocationPage} from "../search-location/search-location";
import {ReclamoService} from "../../services/reclamos";
import {UsuarioService} from "../../services/usuarios";

import {Reclamo} from "../../clases/reclamo";
import {Usuario} from "../../clases/usuario";

import {LoginPage} from "../login/login";
import {DetalleReclamoPage} from "../detalle-reclamo/detalle-reclamo";
import {CONFIG} from '../../clases/customconfig';
import {CategoriaService} from "../../services/categorias";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  // search condition
  public reclamos: any;
  private user: Usuario;
  private baseImageUrl = CONFIG.baseUrlMedia;

  constructor(private storage: Storage,
    public nav: NavController,
    public popoverCtrl: PopoverController,
    public reclamoService: ReclamoService,
    public usuarioService: UsuarioService,
    public categoriaService: CategoriaService
  ) {

  }

  ionViewWillEnter() {
    if(this.usuarioService.getCurrentUser() == null){
      this.user = null;
    }else{
      this.user = this.usuarioService.getCurrentUser();
      this.listarReclamos();
      this.actualizarCategorias();
    }
  }

  nuevoReclamo(){
    this.nav.push(CategoriasPage);
  }

  actualizarCategorias(){
    this.categoriaService.getAll()
        .then(data => {
          localStorage.setItem('categorias', JSON.stringify(data));
          console.log('actualizarCategorias');
        });
  }

  listarReclamos(){
    this.reclamoService.getAll()
        .subscribe(data => {
          this.reclamos = data
          localStorage.setItem('reclamos', JSON.stringify(data));
        }, err => {
            console.log(err);
        });
  }

  eliminarReclamo(idReclamo:number){
    this.reclamoService.remove(idReclamo)
        .then(data => {
          this.listarReclamos();
        });
  }

  verReclamo(reclamo: Reclamo){
      this.nav.push(DetalleReclamoPage, reclamo);
  }

  // choose place
  choosePlace(from) {
    this.nav.push(SearchLocationPage, from);
  }

  presentNotifications(myEvent) {
    console.log(myEvent);
    let popover = this.popoverCtrl.create(NotificationsPage);
    popover.present({
      ev: myEvent
    });
  }

}

//
