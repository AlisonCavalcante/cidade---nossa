import { IPoster, IPosterNodata } from "./Poster";

export interface IComentario{
  id?: number;
  comentario: string;
  poster: IPoster;
}
export interface IComentarioEnvio{
  id?: number;
  comentario: string;
  poster: IPosterNodata;
}
