package org.acme.EndPointResouces;

import java.util.List;

import javax.inject.Inject;
import javax.transaction.Transactional;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;

import org.acme.DAO.UsuarioDao;
import org.acme.Entidades.Usuario;

@Path("/Usuario")
@Produces(MediaType.APPLICATION_JSON)
public class UsuarioResouce {
    

    @Inject
    private UsuarioDao usarioDao;
    
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/login")
    public Usuario userByEmailAndSenha(@QueryParam("email") String email, @QueryParam("senha") String senha) {
      return Usuario.find("email = ?1 and senha = ?2", email,senha).firstResult();
    }
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/auth")
    public Usuario userByEmail(@QueryParam("email") String email) {
       return usarioDao.findByEmail(email);
    }


    @POST
    @Transactional
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Usuario criarUsuario(Usuario usuario){
        usuario.persist();
        return usuario;
    }
}
