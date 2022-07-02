import { IUsuario } from './Usuario';
import { IPoster, IPosterNodata } from "./Poster";

export interface IComentario{
  id?: number;
  comentario: string;
  poster: IPoster;
  usuario: IUsuario;
  isEdit?: boolean;
}
export interface IComentarioEnvio{
  id?: number;
  comentario: string;
  poster: IPosterNodata;
  usuario: IUsuario;
}
