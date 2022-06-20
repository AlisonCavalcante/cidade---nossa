import { IComentario } from './Comentario';

export interface IPoster{
  id?: number;
  titulo: string;
  descricao: string;
  dataCriacao: string;
  hashtags: string;
  likes: number;
  comentarios?: IComentario[];
  isComment?: boolean;
  isAberto?: boolean;
}
