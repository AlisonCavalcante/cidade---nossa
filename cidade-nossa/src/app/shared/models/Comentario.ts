import { IPoster } from "./Poster";

export interface IComentario{
  id?: number;
  comentario: string;
  poster: IPoster;
}
