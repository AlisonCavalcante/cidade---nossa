package org.acme.EndPointResouces;

import javax.transaction.Transactional;
import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.acme.Entidades.Usuario;

@Path("/Usuario")
@Produces(MediaType.APPLICATION_JSON)
public class UsuarioResouce {
    

    @POST
    @Transactional
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Usuario criarUsuario(Usuario usuario){
        usuario.persist();
        return usuario;
    }
}
