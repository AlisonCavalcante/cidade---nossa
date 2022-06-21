package org.acme.EndPointResouces;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.NotFoundException;
import javax.ws.rs.POST;
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

