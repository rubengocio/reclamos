import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Reclamo} from "../../clases/reclamo";
import {CONFIG} from '../../clases/customconfig';
/**
 * Generated class for the DetalleReclamoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-detalle-reclamo',
  templateUrl: 'detalle-reclamo.html',
})
export class DetalleReclamoPage {
  public reclamo: Reclamo;
  private baseImageUrl = CONFIG.baseUrlMedia;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams) {
        this.reclamo = this.navParams.data;
  }

}
