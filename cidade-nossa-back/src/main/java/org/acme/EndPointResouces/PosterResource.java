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

import org.acme.Entidades.Poster;
import org.acme.Entidades.PosterDTO;

import io.quarkus.hibernate.orm.panache.PanacheEntityBase;

@Path("/Posters")
@Produces(MediaType.APPLICATION_JSON)
public class PosterResource {

    @GET
    public List<Poster> listarProdutos() {
        return Poster.listAll();
    }

    @POST
    @Transactional
    @Consumes({ MediaType.APPLICATION_JSON })
    public void criarPoster(PosterDTO dto) {
        Poster p = new Poster();
        p.titulo = dto.titulo;
        p.descricao = dto.descricao;
        p.hashtags = dto.hashtags;
        p.likes = 0;
        p.persist();
    }

    @PUT
    @Path("{id}")
    @Transactional
    public void atualizarPoster(@PathParam("id") Long id, PosterDTO dto) {
        Optional<Poster> posterOp = Poster.findByIdOptional(id);

        if (posterOp.isPresent()) {
            Poster poster = posterOp.get();
            poster.titulo = dto.titulo;
            poster.descricao = dto.descricao;
            poster.hashtags = dto.hashtags;
            poster.likes = dto.likes;
            poster.persist();
        } else {
            throw new NotFoundException();
        }
    }

    @DELETE
    @Path("{id}")
    @Transactional
    public void deletePoster(@PathParam("id") Long id) {
        Optional<Poster> posterOp = Poster.findByIdOptional(id);

        posterOp.ifPresentOrElse(Poster::delete, () -> {
            throw new NotFoundException();
        });

    }
}