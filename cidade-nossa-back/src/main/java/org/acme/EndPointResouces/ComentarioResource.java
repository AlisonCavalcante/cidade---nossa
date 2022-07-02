package org.acme.EndPointResouces;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.NotFoundException;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.acme.Entidades.Comentario;

@Path("/Comentarios")
@Produces(MediaType.APPLICATION_JSON)
public class ComentarioResource {
    
    @GET
    public List<Comentario> listarProdutos() {
        return Comentario.listAll();
    }

    @POST
    @Transactional
    @Consumes({ MediaType.APPLICATION_JSON })
    public Comentario create(Comentario comentario){
      comentario.persist();
      return comentario;
    }

    
    @PUT
    @Path("{id}")
    @Transactional
    public void atualizarPoster(@PathParam("id") Long id, Comentario comentarioDto) {
        Optional<Comentario> comentarioOp = Comentario.findByIdOptional(id);
        // System.out.println(comentarioDto.usuario.email);
        if (comentarioOp.isPresent()) {
          Comentario comentario = comentarioOp.get();
          comentario.comentario = comentarioDto.comentario;
          comentario.poster = comentarioDto.poster;
          comentario.usuario = comentarioDto.usuario;
          comentario.persist();
        } else {
            throw new NotFoundException();
        }
    }

    @DELETE
    @Path("{id}")
    @Transactional
    public void deleteComentario(@PathParam("id") Long id){
      Optional<Comentario> comentOp = Comentario.findByIdOptional(id);

      comentOp.ifPresentOrElse(Comentario::delete, () -> {
          throw new NotFoundException();
      });
    } 

}

