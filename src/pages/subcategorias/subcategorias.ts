import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Categoria } from "../../clases/categoria";
import { Subcategoria } from "../../clases/subcategoria";
import { SubcategoriaService} from "../../services/subcategorias";
import { DescripcionPage } from "../descripcion/descripcion";
import {Reclamo} from "../../clases/reclamo";

/**
 * Generated class for the SubcategoriasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-subcategorias',
  templateUrl: 'subcategorias.html',
})
export class SubcategoriasPage {
  public categoria: any;
  public subcategorias: any;
  public reclamo: Reclamo;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public subcategoriaService: SubcategoriaService) {
      this.categoria = this.navParams.data;
      this.reclamo = new Reclamo();
  }

  ngOnInit(){
    this.subcategorias = this.categoria.subcategorias;
    console.log(this.subcategorias);
  }

  descripcion(subcategoria: Subcategoria){
    this.reclamo.subcategoria = subcategoria;
    this.navCtrl.push(DescripcionPage, this.reclamo);
  }

}
