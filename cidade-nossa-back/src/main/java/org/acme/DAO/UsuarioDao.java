package org.acme.DAO;

import java.util.List;

import javax.inject.Inject;
import javax.inject.Singleton;
import javax.persistence.EntityManager;
import javax.persistence.NoResultException;

import org.acme.Entidades.Usuario;

@Singleton
public class UsuarioDao {
    @Inject
    private EntityManager entityManager;

    public Usuario findByEmail(String email) {
        try {
         Usuario user = entityManager.createQuery("SELECT u FROM Usuario u WHERE u.email = :email  ", Usuario.class).setParameter("email", email).getSingleResult();
         return user;
        } catch (NoResultException  nre) {
            return null;
        }
    }

    public List<Usuario> findAllUsuarios(){
        return Usuario.listAll();
    }
}
