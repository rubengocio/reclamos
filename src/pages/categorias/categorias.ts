import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {CategoriaService} from "../../services/categorias";
import {SubcategoriasPage} from "../subcategorias/subcategorias";

/**
 * Generated class for the CategoriasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-categorias',
  templateUrl: 'categorias.html',
})
export class CategoriasPage {
  public categorias: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public categoriaService: CategoriaService) {
  }

  ngOnInit(){
    this.categorias = JSON.parse(localStorage.getItem('categorias'));
  }

  subcategorias(categoria){
    this.navCtrl.push(SubcategoriasPage, categoria);
  }

}
