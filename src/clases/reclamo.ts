import {Subcategoria} from "./subcategoria";
import {Usuario} from "./usuario";

export class Reclamo{
  id?: number;
  subcategoria?: Subcategoria;
  imagen?: string;
  descripcion?: string;
  calle?: string;
  numero?: string;
  coord_x?: number;
  coord_y?: number;
  usuario?: Usuario;
  
}
