package org.acme.DAO;

import java.util.List;

import javax.inject.Inject;
import javax.inject.Singleton;
import javax.persistence.EntityManager;

import org.acme.Entidades.Usuario;

@Singleton
public class UsuarioDao {
    @Inject
    private EntityManager entityManager;

    public Usuario findByEmail(String email) {
        return entityManager.createQuery("SELECT u FROM Usuario u WHERE u.email = :email  ", Usuario.class).setParameter("email", email).getSingleResult();
    }
}
